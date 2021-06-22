import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import plus from "../images/plus.png";
import "../css/dropdown.css";
import "../css/navbar.css";
import cartSer from "../services/cart";
import "../css/cartCss.css";

class NavBar extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    this.setState({ value: input.value });
  };

  handleClick = (e) => {
    // console.log(e.key);
    let q = this.state.value;
    if (e.key === "Enter") {
      if (
        q === "Mobiles" ||
        q === "Mobile" ||
        q === "RealMe" ||
        q === "Oppo" ||
        q === "Mi" ||
        q === "Samsung" ||
        q === "Apple"
      ) {
        window.location = "/home/Mobiles/?page=1&q=" + this.state.value;
      } else if (
        q === "Laptop" ||
        q === "Laptops" ||
        q === "Acer" ||
        q === "HP" ||
        q === "Dell" ||
        q === "Apple"
      ) {
        window.location = "/home/Laptops/?page=1&q=" + this.state.value;
      } else {
        window.location = "/home/Camera/?page=1&q=" + this.state.value;
      }
    }
  };

  handleHome = () => {
    window.location = "/home";
  };
  render() {
    let cart = cartSer.getCart();

    let qty = 0;
    for (var i = 0; i < cart.length; i++) {
      qty = qty + cart[i].qyt;
    }

    return (
      <React.Fragment>
        <div className="row" style={{ backgroundColor: "#2874F0" }}>
          <div className="col-lg-2 col-4 mt-1 p-0 text-right">
            <Link to="/home" className="row ml-1">
              <img
                src={logo}
                className="img-fluid router-link-active"
                routerlinkactive="router-link-active"
                style={{ width: 100, cursor: "pointer" }}
                tabIndex="0"
              />
            </Link>
            <div className="row text-primary ml-1">
              <Link to="" className="text-white" style={{ fontSize: 10 }}>
                <i>
                  Explore &nbsp;
                  <span style={{ color: "yellow" }}>
                    Plus &nbsp; <img src={plus} alt="" style={{ width: 10 }} />
                  </span>
                </i>{" "}
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-5 mt-2 p-0">
            <input
              className="form-control"
              placeholder="Search for products, brands and more"
              onChange={this.handleChange}
              onKeyPress={this.handleClick}
              value={this.state.value}
            />
          </div>
          <div
            className="col-2 text-white mt-1 text-center p-0 d-none d-lg-block"
            style={{ minHeight: 20 }}
          >
            <div className="dropdown">
              <div className="dropbtn">
                My Account &nbsp;
                <span>
                  <i
                    id="onhover"
                    style={{ fontSize: 10, color: "lightgrey" }}
                    className="fa fa-chevron-down"
                  ></i>
                </span>
              </div>
              <div className="dropdown-content">
                <div>
                  <Link to="">My Profile</Link>
                </div>
                <div>
                  <Link to="">Orders</Link>
                </div>
                <div>
                  <Link to="">WishList</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-1 text-white mt-1 text-center p-0 d-none d-lg-block"
            style={{ minHeight: 20 }}
          >
            <div className="dropdown">
              <div className="dropbtn">
                More &nbsp;
                <i
                  id="onhover"
                  style={{ fontSize: 10, color: "lightgrey" }}
                  className="fa fa-chevron-down"
                ></i>
              </div>
              <div className="dropdown-content">
                <div>
                  <Link to="">Notification</Link>
                </div>
                <div>
                  <Link to="">Sell on FlipKart</Link>
                </div>
                <div>
                  <Link to="">24x7 Customer Care</Link>
                </div>
                <div>
                  <Link to="">Advertise</Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/home/checkout"
            className="col-lg-2 col-3 text-white mt-3 p-0"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            &nbsp;<i className="fa fa-shopping-cart"></i>
            &nbsp;&nbsp;
            {cartSer.getCart().length === 0 ? (
              ""
            ) : (
              <span className="cartcss">{qty}</span>
            )}
            &nbsp;&nbsp;
            <span style={{ color: "white" }}>Cart</span>
          </Link>
        </div>
        <div
          className="row bg-white"
          style={{
            color: "#212121",
            minHeight: 25,
            fontFamily: "Roboto,Arial,sans-serif",
          }}
        >
          <div className="col-4 text-center" id="onhover">
            <div className="dropdown">
              <div className="dropbtn1">
                Mobiles
                <i
                  className="fa fa-chevron-down"
                  id="onhover"
                  style={{ fontSize: 10, color: "lightgrey" }}
                ></i>
              </div>
              <div className="dropdown-content">
                <div>
                  <Link to="/home/Mobiles/Mi?page=1">Mi</Link>
                </div>
                <div>
                  <Link to="/home/Mobiles/RealMe?page=1">RealMe</Link>
                </div>
                <div>
                  <Link to="/home/Mobiles/Samsung?page=1">Samsung</Link>
                </div>
                <div>
                  <Link to="/home/Mobiles/Oppo?page=1">OPPO</Link>
                </div>
                <div>
                  <Link to="/home/Mobiles/Apple?page=1">Apple</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 text-center" id="onhover">
            <div className="dropdown">
              <div className="dropbtn1">
                Laptops
                <i
                  className="fa fa-chevron-down"
                  id="onhover"
                  style={{ fontSize: 10, color: "lightgrey" }}
                ></i>
              </div>
              <div className="dropdown-content">
                <div>
                  <Link to="/home/Laptops/Apple?page=1">Apple</Link>
                </div>
                <div>
                  <Link to="/home/Laptops/HP?page=1">HP</Link>
                </div>
                <div>
                  <Link to="/home/Laptops/Dell?page=1">Dell</Link>
                </div>
                <div>
                  <Link to="/home/Laptops/Acer?page=1">Acer</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 text-center" id="onhover">
            <div className="dropdown">
              <div className="dropbtn1">
                Camera
                <i
                  className="fa fa-chevron-down"
                  id="onhover"
                  style={{ fontSize: 10, color: "lightgrey" }}
                ></i>
              </div>
              <div className="dropdown-content">
                <div>
                  <Link to="/home/Camera/DSLR?page=1">DSLR</Link>
                </div>
                <div>
                  <Link to="/home/Camera/Lens?page=1">Lens</Link>
                </div>
                <div>
                  <Link to="/home/Camera/Tripods?page=1">Tripods</Link>
                </div>
                <div>
                  <Link to="/home/Camera/Compact?page=1">Compact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
