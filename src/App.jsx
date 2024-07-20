import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAllProducts } from "./redux/reducers/products.reducer";
import ProductsList from "./components/ProductsList";

function App() {
  const { products = {} } = useSelector((store) => store);
  console.log("products", products);
  const dispatcher = useDispatch();
  // Calculate total stock and amount
  const { overallAmount, overallStock } = products.products.reduce(
    (acc, item) => {
      acc.overallStock += item.stock;
      acc.overallAmount += item.price * item.stock;
      return acc;
    },
    { overallStock: 0, overallAmount: 0 }
  );

  useEffect(() => {
    fetch("https://reduxapp-react.netlify.app/products.json")
      .then((response) => response.json())
      .then((result) => dispatcher(saveAllProducts(result)));
  }, []);

  return (
    <>
    <h4 className="fs-4 ms-3 my-3">Mobile Shop</h4>
      {products.products.map((item, index) => (
        <div key={index}>
          <ProductsList item={item} />
        </div>
      ))} 
      <div className="container-fluid">
      <div className="col-md-12 px-5 py-3 my-3 border">
        <h5 className="fs-5">Total Stock : {overallStock}</h5>
        <h5 className="fs-5">Total Amount : ${overallAmount}</h5>
      </div>
      </div>
    </>
  );
}

export default App;
