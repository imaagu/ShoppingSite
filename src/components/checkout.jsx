import React, { Component } from "react";
import NavBar from "../components/navBar";
import cartSer from "../services/cart";
import CartItem from "./cartItem";
import checkout from "../images/checkout.svg";
class Checkout extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    let cart = cartSer.getCart();
    console.log(cart);
    this.setState({ cart });
  }

  handleQty = (index, val) => {
    let cart = this.state.cart;
    cart[index].qyt = cart[index].qyt + val;
    if (cart[index].qyt <= 0) {
      cart.splice(index, 1);
    }
    cartSer.setCart(cart);
    this.setState({ cart: cart });
  };

  render() {
    let cart = cartSer.getCart();

    let qty = 0;
    let price = 0;
    for (var i = 0; i < cart.length; i++) {
      qty = qty + cart[i].qyt;
      price = price + cart[i].price * cart[i].qyt;
    }
    return (
      <div>
        <NavBar />
        <div className="row mt-2">
          <div className="col-lg-8 col-12 bg-white ml-1 mr-1">
            <div className="row border-bottom">
              <div
                className="col-6"
                style={{
                  fontSize: 18,
                  lineHeight: "56px",
                  padding: "0 24px",
                  fontWeight: "500",
                }}
              >
                My Cart({qty})
              </div>
            </div>
            <div>
              <CartItem cart={this.state.cart} onQty={this.handleQty} />
            </div>
          </div>
          <div className="col-lg-3 col-12 ml-1">
            <div className="row bg-white">
              <div className="col">
                <div
                  className="row border-bottom"
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color: "#878787",
                    minHeight: 47,
                  }}
                >
                  <div className="col pt-2">PRICE DETAILS </div>
                </div>
                <div className="row pt-2 pb-2">
                  <div className="col-6">Price({qty} items) </div>
                  <div className="col-6 text-right"> ₹{price} </div>
                </div>
                <div className="row pt-2 pb-2">
                  <div className="col-6">Delivery </div>
                  <div className="col-6 text-success text-right"> FREE </div>
                </div>
                <div
                  className="row pt-2 pb-2"
                  style={{
                    fontWeight: "500",
                    borderTop: "1px dashed e0e0e0",
                    fontSize: 18,
                  }}
                >
                  <div className="col-6">Total Payable </div>
                  <div className="col-6  text-right">₹{price} </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-1">
                <img src={checkout} alt="" style={{ width: 25 }} />
              </div>
              <div
                className="col-9"
                style={{
                  fontSize: 14,
                  textAlign: "left",
                  fontWeight: "500",
                  display: "inline-block",
                  color: "#878787",
                }}
              >
                Safe and Secure Payments. Easy returns. 100% Authentic products.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
