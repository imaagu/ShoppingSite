import React, { Component } from "react";
import serv from "../services/mobileApi";
import ImageSlider from "./imageSlider";
import rightimg from "../images/rightbanner.jpg";
import ShowDeal from "./showDeal";
import ShowBanner from "./showBanner";
import NavBar from "../components/navBar";
class Home extends Component {
  state = {
    deals: [],
    dealIndex: 0,
    dealEndIndex: 0,
  };

  async componentDidMount() {
    let data = await serv.getAllDeals();
    console.log(data);
    let dealIndex = 1;
    let dealEndIndex = data.length / 5;
    this.setState({ deals: data, dealIndex, dealEndIndex });
  }

  handleDealButton = (val) => {
    let dealIndex = this.state.dealIndex;

    let dealEndIndex = this.state.dealEndIndex;
    if (dealIndex > 0 && dealIndex <= dealEndIndex + 1) {
      dealIndex = dealIndex + val;
      this.setState({ dealIndex });
    }
    return 0;
  };

  handleProduct = (item) => {
    this.props.history.push({
      pathname: "/home/" + item.category + "/" + item.brand + "/" + item.id,
    });
  };

  handleAdd = () => {
    this.props.history.push({
      pathname: "/home/Mobiles/RealMe/M17",
    });
  };
  handleAdd1 = () => {
    this.props.history.push({
      pathname: "/home/Mobiles/RealMe/M20",
    });
  };

  render() {
    let start = (this.state.dealIndex - 1) * 5;
    let tempApp = [...this.state.deals];
    let arr = tempApp.splice(start, 5);
    return (
      <React.Fragment>
        <NavBar />
        <ImageSlider onClickProduct={this.handleAdd} />
        <div className="row mt-1">
          <div
            className="col-lg-9 col-12 border border-bottom ml-0"
            style={{ backgroundColor: "white", fontSize: 22 }}
          >
            <b>Deals of the Day</b>
            <hr />
            <ShowDeal
              index={this.state.dealIndex}
              end={this.state.dealEndIndex}
              deals={arr}
              onDealButton={this.handleDealButton}
              onProductClick={this.handleProduct}
            />
          </div>
          <div className="col-2 border-light ml-1 bg-white text-right d-none d-lg-block">
            <img
              src={rightimg}
              className="img-fluid"
              alt=""
              style={{ width: "auto" }}
            />
          </div>
        </div>
        <ShowBanner onClickProduct={this.handleAdd1} />
        <div
          className="row border-top mt-2"
          style={{ backgroundColor: "#fff", color: "#848484" }}
        >
          <div className="col mt-3" style={{ fontSize: 10 }}>
            <h6> FlipKart: The One-stop Shopping Destination</h6>
            <p>
              E-commerce is revolutionizing the way we all shop in India. Why do
              you want to hop from one store to another in search of the latest
              phone when you can find it on the Internet in a single click? Not
              only mobiles. Flipkart houses everything you can possibly imagine,
              from trending electronics like laptops, tablets, smartphones, and
              mobile accessories to in-vogue fashion staples like shoes,
              clothing and lifestyle accessories; from modern furniture like
              sofa sets, dining tables, and wardrobes to appliances that make
              your life easy like washing machines, TVs, ACs, mixer grinder
              juicers and other time-saving kitchen and small appliances; from
              home furnishings like cushion covers, mattresses and bedsheets to
              toys and musical instruments, we got them all covered. You name
              it, and you can stay assured about finding them all here. For
              those of you with erratic working hours, Flipkart is your best
              bet. Shop in your PJs, at night or in the the wee hours of the
              moring. This e-commerce never shuts down.
            </p>
          </div>
        </div>
        <div
          className="row "
          style={{ backgroundColor: "#fff", color: "#848484" }}
        >
          <div className="col " style={{ fontSize: 10 }}>
            <h6>FlipKart Plus</h6>
            <p>
              A world of limitless possibilities awaits you - Flipkart Plus was
              kickstarted as a loyalty reward programme for all its regular
              customers at zero subscription fee. All you need is 500 supercoins
              to be a part of this service. For every 100 rupees spent on
              Flipkart order, Plus members earns 4 supercoins & non-plus members
              earn 2 supercoins. Free delivery, early access during sales and
              shopping festivals, exchange offers and priority customer service
              are the top benefits to a Flipkart Plus member. In short, earn
              more when you shop more! What's more, you can even use the
              Flipkart supercoins for a number of exciting services, like: An
              annual Zomato Gold membership An annual Hotstar Premium membership
              6 months Gaana plus subscription Rupees 550 instant discount on
              flights on ixigo Check out
              https://www.flipkart.com/plus/all-offers for the entire list.
              Terms and conditions apply.
            </p>
          </div>
        </div>
        <div
          className="row "
          style={{ backgroundColor: "#fff", color: "#848484" }}
        >
          <div className="col " style={{ fontSize: 10 }}>
            <h6>No Cost EMI</h6>
            <p>
              In an attempt to make high-end products accessible to all, our No
              Cost EMI plan enables you to shop with us under EMI, without
              shelling out any processing fee. Applicable on select mobiles,
              laptops, large and small appliances, furniture, electronics and
              watches, you can now shop without burning a hole in your pocket.
              If you've been eyeing a product for a long time, chances are it
              may be up for a no cost EMI. Take a look ASAP! Terms and
              conditions apply.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
