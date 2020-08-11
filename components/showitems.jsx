import React from "react";
import { Link } from "react-router-dom";
import assured from "../images/ass.png";
import Like from "./like";
import "../css/name.css";
const ShowItems = (props) => {
  const { data, brand, catg, onLike, sortBy, onSort, onImgClick } = props;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <nav
            aria-label="breadcrumb"
            style={{ fontSize: 10, backgroundColor: "white" }}
          >
            <ol className="breadcrumb bg-white">
              <li className="breadcrumb-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to={"/home/" + catg}>{catg}</Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                <Link to={"/home/" + catg + "/" + brand}>{brand}</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {brand} {catg}
        </div>
      </div>
      <div className="row pb-1 m-1 border-bottom" style={{ fontSize: 14 }}>
        <div className="col-2 d-none d-lg-block">
          <strong>Sort By</strong>
        </div>
        <div
          style={{ cursor: "pointer", borderBottom: 5 }}
          onClick={() => onSort("Popularity")}
          className={
            sortBy === "Popularity"
              ? "col-1 d-none d-lg-block text-primary"
              : "col-1 d-none d-lg-block"
          }
        >
          Popularity
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => onSort("Price High to Low")}
          className={
            sortBy === "Price High to Low"
              ? "col-2 d-none d-lg-block text-primary"
              : "col-2 d-none d-lg-block"
          }
        >
          Price High to Low
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => onSort("Price Low to High")}
          className={
            sortBy === "Price Low to High"
              ? "col-2 d-none d-lg-block text-primary"
              : "col-2 d-none d-lg-block"
          }
        >
          Price Low to High
        </div>
      </div>

      {data.map((item, index) => (
        <div key={index} className="row">
          <div className="col-lg-2 col-9 text-center">
            <img
              onClick={() => onImgClick(item)}
              src={item.img}
              style={{
                height: item.category === "Mobiles" ? 200 : 120,
                width: 100,
                cursor: "pointer",
              }}
              tabIndex={index}
            />
          </div>
          <div className="col-lg-1 col-2 text-secondary">
            <i onClick={() => onLike(index)}>
              {" "}
              <Like liked={item.liked} />
            </i>
          </div>
          <div className="col-lg-5 col-12 text-left">
            <div className="row">
              <div className="col" style={{ fontSize: 16, cursor: "pointer" }}>
                <span onClick={() => onImgClick(item)} className="namecss">
                  {item.name}
                </span>
              </div>
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
                    {item.rating}&nbsp;
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwM
C9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQ
zOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEyb
DEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg=="
                      alt=""
                    />
                  </strong>
                </span>
                &nbsp;
                <span className="text-muted">{item.ratingDesc}</span>
              </div>
            </div>
            {item.details.map((detail) => (
              <ul
                key={detail}
                style={{
                  color: "#c2c2c2",
                  fontSize: 12,
                  display: "inline",
                  padding: "0%",
                }}
              >
                <li>{detail}</li>
              </ul>
            ))}
          </div>
          <div className="col-lg-3 col-12">
            <div className="row">
              <div className="col" style={{ fontSize: 25 }}>
                <strong>₹{item.price}</strong>
                &nbsp;
                {item.assured ? (
                  <span>
                    <img
                      src={assured}
                      alt=""
                      className="img-fluid"
                      style={{ width: 70 }}
                    />
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: 14,
                    color: "#878787",
                  }}
                >
                  ₹{item.prevPrice}
                </span>
                &nbsp;
                <span
                  style={{ color: "#388e3c", fontSize: 13, fontWeight: "500" }}
                >
                  {item.discount}%
                </span>
              </div>
            </div>
            <div className="row" style={{ fontSize: 14 }}>
              <div className="col"></div>
            </div>
            <div className="row" style={{ fontSize: 14 }}>
              <div className="col">{item.exchange}</div>
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ShowItems;
