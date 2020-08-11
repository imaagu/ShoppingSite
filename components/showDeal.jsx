import React from "react";
const ShowDeal = (props) => {
  let { deals, index, end, onDealButton, onProductClick } = props;
  return (
    <div className="row">
      {index > 1 ? (
        <div className="col-1 text-left">
          <button
            style={{
              alignSelf: "center",
              padding: "60px 5px",
              color: "black",
              boxShadow: "1px 2px 10px -1px rgba(0,0,0,3) ",
              backgroundColor: "hsla(0,0% , 100% , .98)",
              cursor: "pointer",
              display: "flex",
              position: "absolute",
              zIndex: "1",
            }}
            onClick={() => onDealButton(-1)}
          >
            <i className="fa fa-angle-left"></i>
          </button>
        </div>
      ) : (
        ""
      )}

      {deals.map((deal, index) => (
        <div key={index} className="col-lg-2 col-3 text-center">
          <div className="row ml-lg-3">
            <img
              onClick={() => onProductClick(deal)}
              src={deal.img}
              routerlinkactive="router-link-active"
              style={{ height: 150, cursor: "pointer" }}
              tabIndex={index}
            />
          </div>
          <div
            className="row p-0"
            style={{ fontSize: 12, fontWeight: 500, marginTop: 15 }}
          >
            {deal.name}
          </div>
          <div className="row" id={deal.id}>
            <div
              className="col"
              id={deal.id}
              style={{ color: "#388e3c", fontSize: 10 }}
            >
              {deal.discount}% off
            </div>
          </div>
        </div>
      ))}
      {index < end ? (
        <div className="col-1 text-left">
          <button
            style={{
              alignSelf: "center",
              padding: "60px 5px",
              color: "black",
              boxShadow: "1px 2px 10px -1px rgba(0,0,0,3) ",
              backgroundColor: "hsla(0,0% , 100% , .98)",
              cursor: "pointer",
              display: "flex",
              position: "absolute",
              zIndex: "1",
            }}
            onClick={() => onDealButton(1)}
          >
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowDeal;
