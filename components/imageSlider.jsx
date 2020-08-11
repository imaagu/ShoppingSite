import React, { PureComponent } from "react";
import img1 from "../images/c2.jpg";
import img2 from "../images/c3.jpg";
import img3 from "../images/c4.jpg";
const ImgSlider = (props) => {
  let { onClickProduct } = props;
  return (
    <div
      id="slides"
      data-ride="carousel"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#slides" data-slide-to="0" className="active"></li>
        <li data-target="#slides" data-slide-to="1"></li>
        <li data-target="#slides" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} alt="First slide" className="d-block w-100" />
        </div>
        <div className="carousel-item ">
          <img src={img2} alt="" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" onClick={onClickProduct} />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        data-slide="prev"
        href="#slides"
        role="button"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"> Previous</span>
      </a>
      <a
        className="carousel-control-next"
        data-slide="next"
        href="#slides"
        role="button"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ImgSlider;
