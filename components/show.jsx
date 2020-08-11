import React, { Component } from "react";
import service from "../services/mobileApi";
import cart from "../images/cart.svg";
import supercoin from "../images/supercoin.png";
import cartSer from "../services/cart";

import NavBar from "../components/navBar";
class Show extends Component {
  state = {
    item: {},
    pics: [],
    currentImg: "",
    offers: [],
    brand: {},
    cart: [],
  };

  async componentDidMount() {
    let parm = this.props.match.params;
    let item = {};
    if (parm.catg === "Mobiles") {
      item = await service.getParticularProduct(parm.id);
    } else {
      item = await service.getParticularProductLap(parm.catg, parm.id);
    }

    let offers = await service.getBankOffers();
    let pics = item.pics.imgList;
    let brand = item.pics;
    let currentImg = pics[0];
    console.log(item);
    this.setState({ item: item.prod, pics, brand, currentImg, offers });
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      let parm = this.props.match.params;
      let item = {};
      if (parm.catg === "Mobiles") {
        item = await service.getParticularProduct(parm.id);
      } else {
        item = await service.getParticularProductLap(parm.catg, parm.id);
      }

      let offers = await service.getBankOffers();
      let pics = item.pics.imgList;
      let brand = item.pics;
      let currentImg = pics[0];
      console.log(item);
      this.setState({ item: item.prod, pics, brand, currentImg, offers });
    }
  }

  handleImg = (img) => {
    this.setState({ currentImg: img });
  };

  handleAddtoCart = () => {
    let detail = this.state.item;
    let cart = cartSer.getCart();
    let index = cart.findIndex((n) => n.id === detail.id);
    if (index === -1) {
      detail.qyt = 1;
      cart.push(detail);
      cartSer.setCart(cart);
      this.setState({ cart: cart });
    } else {
      detail.qyt++;
      cart[index] = detail;
      cartSer.setCart(cart);
      this.setState({ cart: cart });
    }
  };

  handleBuyNow = () => {
    let detail = this.state.item;
    let cart = cartSer.getCart();
    let index = cart.findIndex((n) => n.id === detail.id);
    if (index === -1) {
      detail.qyt = 1;
      cart.push(detail);
      cartSer.setCart(cart);
      this.setState({ cart: cart });
    }

    this.props.history.push({
      pathname: "/home/checkout",
    });
  };

  render() {
    let imgArr = this.state.pics;
    let detail = this.state.item;

    return (
      <div>
        <NavBar />
        <div className="row" style={{ backgroundColor: "white" }}>
          <div className="col-lg-5 col-12">
            <div className="row p-0">
              <div className="col-lg-2 col-4 text-center">
                {imgArr.map((imgg) => (
                  <div
                    key={imgg}
                    style={{
                      height: 64,
                      width: 64,
                      textAlign: "center",
                      borderWidth: "2px solid",
                    }}
                    className={
                      this.state.currentImg === imgg
                        ? "border-primary row border ml-lg-2 ml-0 "
                        : "row  ml-lg-2 ml-0"
                    }
                  >
                    <div className="col text-center">
                      <img
                        onClick={() => this.handleImg(imgg)}
                        src={imgg}
                        alt=""
                        style={{ width: 40, height: 50 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-8 col-8 border p-0 text-center">
                <img src={this.state.currentImg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-4"> </div>
              <div className="col-lg-4 col-4 text-sm-center">
                <button
                  onClick={() => this.handleAddtoCart()}
                  className="btn btn-sm btn-warning text-white"
                >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  &nbsp;Add to Cart
                </button>
              </div>
              <div className="col-lg-4 col-4">
                <button
                  onClick={() => this.handleBuyNow()}
                  className="btn btn-sm text-white"
                  style={{ backgroundColor: "#fb641b" }}
                >
                  <i className="fa fa-bolt" aria-hidden="true"></i>
                  &nbsp;Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="row"></div>
            <div
              className="row"
              style={{
                color: "#212121",
                fontSize: 18,
                fontWeight: "400",
                padding: 0,
                lineHeight: "1.4",
                fontSize: "inherit",
                fontWeight: "inherit",
                display: "inline-block",
              }}
            >
              <div className="col">{detail.name}</div>
            </div>
            <div className="row">
              <div className="col">
                <span
                  style={{
                    lineHeight: "normal",
                    display: "inline-block",
                    color: "#fff",
                    padding: "2px 4px 2px 6px",
                    borderRadius: 3,
                    fontWeight: "500",
                    fontSize: 12,
                    verticalAlign: "middle",
                    backgroundColor: "#388e3c",
                  }}
                >
                  <strong>
                    {detail.rating}&nbsp;
                    <img
                      _ngcontent-xya-c7=""
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                    ></img>
                  </strong>
                </span>
                &nbsp;
                <span
                  className="text-muted"
                  style={{ fontSize: 14, fontWeight: "500" }}
                >
                  {detail.ratingDesc}
                </span>
                &nbsp;&nbsp;
              </div>
            </div>
            <div className="row mt-2">
              <div
                className="col"
                style={{
                  fontSize: 28,
                  verticalAlign: "sub",
                  fontWeight: "500",
                }}
              >
                ₹{detail.price}&nbsp;
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: 16,
                    color: "#878787",
                  }}
                >
                  {detail.prevPrice}
                </span>
                &nbsp;
                <span
                  style={{ color: "#388e3c", fontSize: 16, fontWeight: "500" }}
                >
                  {detail.discount}%
                </span>
              </div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{
                  fontSize: 16,
                  marginLeft: 12,
                  verticalAlign: "middle",
                  fontWeight: "500",
                  color: "black",
                }}
              >
                Available Offers{" "}
              </div>
            </div>
            <div className="row">
              {this.state.offers.map((offer, index) => (
                <div key={index} className="col-12">
                  <img src={offer.img} style={{ height: 18, width: 18 }} />
                  &nbsp;
                  <span
                    style={{
                      color: "#212121",
                      fontWeight: "500",
                      paddingRight: 4,
                      fontSize: 14,
                    }}
                  >
                    {offer.type}
                  </span>
                  &nbsp;
                  <span style={{ fontSize: 14 }}>{offer.detail}</span>
                </div>
              ))}
            </div>
            <div className="row mt-2">
              <div className="col-lg-1 col-3 border text-center ml-2">
                <img
                  src={this.state.brand.brandImg}
                  style={{ width: 38, height: 30 }}
                />
              </div>
              <div
                className="col-8 ml-3 d-none d-lg-block"
                style={{ fontSize: 14 }}
              >
                Brand Warranty of 1 Year Available for Mobile and 6 Months for
                Accessories
              </div>
            </div>
            <div className="row mt-2">
              <div
                className="col-1 d-none d-lg-block"
                style={{
                  fontWeight: "500",
                  color: "#878787",
                  width: 110,
                  paddingRight: 10,
                  folat: "left",
                  fontSize: 14,
                }}
              >
                Highlights
              </div>
              <div className="col-5 d-none d-lg-block">
                <ul>
                  {detail.details === undefined ? (
                    ""
                  ) : (
                    <React.Fragment>
                      {detail.details.map((d, index) => (
                        <li
                          key={index}
                          style={{
                            fontSize: 14,
                            color: "grey",
                            lineHeight: "1.4",
                          }}
                        >
                          <span style={{ color: "black" }}>{d}</span>
                        </li>
                      ))}
                    </React.Fragment>
                  )}
                </ul>
              </div>
              <div
                className="col-2 d-none d-lg-block"
                style={{
                  fontWeight: "500",
                  color: "#878787",
                  width: 110,
                  paddingRight: 10,
                  float: "left",
                  fontSize: 14,
                }}
              >
                Easy Payment Options
              </div>
              <div className="col-4 d-none d-lg-block">
                <ul style={{ fontSize: 14, color: "grey", lineHeight: "1.4" }}>
                  <li>
                    <span style={{ color: "black" }}>
                      No cost EMI NaN/month
                    </span>
                  </li>
                  <li>
                    <span style={{ color: "black" }}>
                      Debit/Flipkart EMI available
                    </span>
                  </li>
                  <li>
                    <span style={{ color: "black" }}>Cash on Delivery</span>
                  </li>
                  <li>
                    <span style={{ color: "black" }}>
                      Net Banking &amp; Credit/Debit/ATM Card
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-1 col-3"
                style={{
                  fontWeight: "500",
                  color: "#878787",
                  width: 110,
                  paddingRight: 10,
                  float: "left",
                  fontSize: 14,
                }}
              >
                Seller
              </div>
              <div className="col-lg-9 col-9">
                <span
                  style={{ color: "#2874f0", fontSize: 14, fontWeight: "500" }}
                >
                  SuperComNet&nbsp;&nbsp;
                </span>
                <span
                  style={{
                    lineHeight: "normal",
                    display: "inline-block",
                    color: "#fff",
                    padding: "2px 4px 2px 6px",
                    fontWeight: "500",
                    fontSize: 12,
                    borderRadius: 4,
                    backgroundColor: "#2874f0",
                  }}
                >
                  4.2 &nbsp;
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                    alt=""
                  />
                </span>
                <ul className="d-node d-lg-block">
                  <li
                    style={{ fontSize: 14, color: "grey", lineHeight: "1.4" }}
                  >
                    10 Day replacement
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img
                  src={supercoin}
                  className="img-fluid"
                  style={{ width: 300, height: 85 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
