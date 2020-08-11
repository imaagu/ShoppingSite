import React from "react";
import "../css/react.css";
const CartItem = (props) => {
  let { cart, onQty } = props;
  return (
    <React.Fragment>
      {cart.map((item, index) => (
        <div key={index} className="row mt-1 bg-white">
          <div className="col-lg-2 col-4">
            <div className="row">
              <div className="col text-center">
                <img
                  style={{
                    width: 50,
                    height: item.category === "Mobiles" ? 92 : 70,
                  }}
                  src={item.img}
                  alt=""
                />
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-12 text-center">
                <button
                  onClick={() => onQty(index, -1)}
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#e0e0e0",
                    cursor: "auto",
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  -
                </button>
                <span className="react">{item.qyt}</span>
                <button
                  onClick={() => onQty(index, 1)}
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#e0e0e0",
                    cursor: "auto",
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: 12,
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-4">
            <div className="row">
              <div className="col" style={{ fontSize: 16, color: "#212121" }}>
                {item.name}
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ color: "#878787", fontSize: 14 }}>
                {item.brand} &nbsp;&nbsp;
              </div>
            </div>
            <div className="row mt-2">
              <div className="col" style={{ fontWeight: "500" }}>
                ₹{item.price} &nbsp;
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: 16,
                    color: "#878787",
                  }}
                >
                  ₹{item.prevPrice}
                </span>
                &nbsp;
                <span
                  style={{ color: "#388e3c", fontSize: 16, fontWeight: "500" }}
                >
                  {item.discount}%
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-4">
            <div className="row">
              <div className="col" style={{ fontSize: 14 }}>
                Delivery in 2 days | Free &nbsp;
                <span style={{ textDecoration: "line-through" }}>₹40</span>
              </div>
            </div>
            <div className="row">
              <div className="col" style={{ fontSize: 12, color: "gray" }}>
                10 Days Replacement Policy
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr />
    </React.Fragment>
  );
};

export default CartItem;
