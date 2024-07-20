import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementStock,
  incrementStock,
} from "../redux/reducers/products.reducer";

export default function ProductsList({ item = {} }) {
  const { products = {} } = useSelector((store) => store);
  const dispatcher = useDispatch();

  function handleDecrement(id) {
    dispatcher(decrementStock({ products, id }));
    console.log(id);
  }

  function handleIncrement(id) {
    dispatcher(incrementStock({ products, id }));
    console.log(id);
  }

  const totalAmount = item.stock * item.price;

  return (
    <div className="container-fluid">
      <div className="col-sm-12 my-3 py-3 px-5 border">
        <div className="row">
          <div className="col-sm-8 d-flex align-items-center gap-5">
            <div className="col-sm-3">
              <img
                src={item.thumbnail}
                alt="images"
                style={{ width: "180px" }}
              />
            </div>
            <div className="col-sm-5">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <h5>{item.category}</h5>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-end justify-content-start">
            <div className="col-sm-2 me-4 d-flex align-items-center justify-content-between">
              <button
                className="btn btn-primary px-3"
                onClick={() => handleDecrement(item.id)}
              >
                -
              </button>
              <p className="mx-2 mt-3">{item.stock}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
            </div>
            <div className="col-sm-2">
              <h5>${item.price}</h5>
            </div>
          </div>
        </div>
        <hr />
        {/* subtotal and shipping */}
        <div className="col-sm-12  py-2 d-flex align-items-center justify-content-center">
          <div className="col-sm-6">
            <h6 className="mb-3">SUBTOTAL : </h6>
            <h6>SHIPPING : </h6>
          </div>
          <div className="col-sm-6 d-flex flex-column  align-items-end justify-content-center">
            <h6 className="mb-3">${totalAmount}</h6>
            <h6>Free</h6>
          </div>
        </div>
        <hr />
        {/* Over all total */}
        <div className="col-sm-12 d-flex align-items-center justify-content-between">
          <h6>Total : </h6>
          <h6>${totalAmount} rs </h6>
        </div>
      </div>
    </div>
  );
}
