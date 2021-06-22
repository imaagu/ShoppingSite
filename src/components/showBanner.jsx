import React from "react";
import img1 from "../images/b1.jpg";
import img2 from "../images/b2.jpg";
import img3 from "../images/b3.jpg";
const ShowBanner = (props) => {
  let { onClickProduct } = props;
  return (
    <div className="row ml-1 mt-1">
      <div className="col-4 text-center">
        <img
          onClick={onClickProduct}
          src={img1}
          alt=""
          className="img-fluid"
          routerlinkactive="router-link-active"
          style={{ width: "auto", height: "auto" }}
          tabIndex="0"
        />
      </div>
      <div className="col-4 text-center">
        <img
          src={img2}
          alt=""
          className="img-fluid"
          style={{ width: "auto" }}
        />
      </div>
      <div className="col-4 text-center">
        <img
          src={img3}
          alt=""
          className="img-fluid"
          style={{ width: "auto" }}
        />
      </div>
    </div>
  );
};

export default ShowBanner;
