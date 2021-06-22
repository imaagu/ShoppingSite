import React, { Component } from "react";
import ass from "../images/ass.png";
import "../css/dropdown.css";
import "../css/question.css";
class LeftPannel extends Component {
  state = {
    show1: 1,
    show2: 1,
    show3: 1,
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    let {
      sportsRadio1,
      sportsRadio2,
      sportsRadio3,
      sportsRadio4,
      onChange,
    } = this.props;

    if (input.type === "checkbox" && input.name === "assured") {
      let cb = sportsRadio1.find((n1) => n1.id === "true");
      console.log(cb);
      if (cb) cb.isSelected = input.checked;
    }
    if (input.type === "checkbox" && input.name === "ram") {
      let cb2 = sportsRadio2.find(
        (n1) => n1.id === input.id || n1.val === input.id
      );
      if (cb2) cb2.isSelected = input.checked;
    }

    if (input.type === "checkbox" && input.name === "rating") {
      let cb3 = sportsRadio3.find((n1) => n1.id === input.id);
      if (cb3) cb3.isSelected = input.checked;
    }

    if (input.type === "checkbox" && input.name === "price") {
      let cb4 = sportsRadio4.find((n1) => n1.id === input.id);
      if (cb4) cb4.isSelected = input.checked;
    }
    // console.log(sportsRadio4);
    onChange(sportsRadio1, sportsRadio2, sportsRadio3, sportsRadio4);
  };

  handleS1 = () => {
    let show1 = this.state.show1;
    if (show1 === 1) show1 = 0;
    else show1 = 1;
    this.setState({ show1: show1 });
  };

  handleS2 = () => {
    let show2 = this.state.show2;
    if (show2 === 1) show2 = 0;
    else show2 = 1;
    this.setState({ show2: show2 });
  };

  handleS3 = () => {
    let show3 = this.state.show3;
    if (show3 === 1) show3 = 0;
    else show3 = 1;
    this.setState({ show3: show3 });
  };

  render() {
    const {
      sportsRadio1,
      sportsRadio2,
      sportsRadio3,
      sportsRadio4,
      cat,
    } = this.props;
    let c1 = this.state.show1 === 1 ? "fa fa-chevron-up" : "fa fa-chevron-down";
    let c2 = this.state.show2 === 1 ? "fa fa-chevron-up" : "fa fa-chevron-down";
    let c3 = this.state.show3 === 1 ? "fa fa-chevron-up" : "fa fa-chevron-down";
    console.log(sportsRadio2);
    return (
      <React.Fragment>
        <div className="row bg-white border-bottom pt-2 pb-2">
          <div
            className="col"
            style={{
              fontSize: 18,
              textTransform: "capitalize",
              width: 67,
              fontWeight: "500",
            }}
          >
            Filters
          </div>
        </div>
        <div className="row bg-white pt-2 pb-2">
          <div className="col-9">
            {sportsRadio1.map((item, index) => (
              <div key={index} className="checkbox">
                <label>
                  <input
                    name="assured"
                    onChange={this.handleChange}
                    value={item.isSelected}
                    checked={item.isSelected}
                    className="form-check-input p-2"
                    type="checkbox"
                    className="ng-untouched ng-pristine ng-valid"
                  />{" "}
                  &nbsp;
                  <img src={ass} alt="" style={{ width: 80, height: 21 }} />
                </label>
              </div>
            ))}
          </div>
          <div className="col-3">
            <span className="question">?</span>
          </div>
        </div>
        {cat === "Camera" ? (
          ""
        ) : (
          <div className="row bg-white border-top">
            <div className="col-10">
              <div
                className="row ml-1 pb-2"
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                  textTransform: "uppercase",
                  letterSpacing: ".3px",
                  display: "inline-block",
                }}
              >
                RAM
              </div>
              {c1 === "fa fa-chevron-up" ? (
                <React.Fragment>
                  {sportsRadio2.map((item, index) => (
                    <div key={index} className="row form-check ml-1 pb-1">
                      <div
                        className="checkbox"
                        style={{
                          verticalAlign: "middle",
                          fontSize: 14,
                          paddingLeft: 11,
                          color: "#212121",
                          display: "inline-block",
                          width: "cal(100% - 25px)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: 1,
                          cursor: "pointer",
                        }}
                      >
                        <label>
                          <input
                            name="ram"
                            onChange={this.handleChange}
                            value={item.isSelected}
                            checked={item.isSelected}
                            id={item.id}
                            type="checkbox"
                            className="ng-untouched ng-pristine ng-valid"
                          />{" "}
                          &nbsp;
                          {item.id}
                        </label>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
            <div className="col-2 text-right">
              <span>
                <i
                  onClick={this.handleS1}
                  style={{
                    fontSize: 10,
                    color: "lightgrey",
                    cursor: "pointer",
                  }}
                  className={c1}
                ></i>
              </span>
            </div>
          </div>
        )}

        <div className="row bg-white border-top">
          <div className="col-10">
            <div
              className="row ml-1 pb-2"
              style={{
                fontSize: 13,
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: ".3px",
                display: "inline-block",
              }}
            >
              Customer Rating
            </div>
            {c2 === "fa fa-chevron-up" ? (
              <React.Fragment>
                {sportsRadio3.map((item, index) => (
                  <div key={index} className="row form-check ml-1 pb-1">
                    <div
                      className="checkbox"
                      style={{
                        verticalAlign: "middle",
                        fontSize: 14,
                        paddingLeft: 11,
                        color: "#212121",
                        display: "inline-block",
                        width: "cal(100% - 25px)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        lineHeight: 1,
                        cursor: "pointer",
                      }}
                    >
                      <label htmlFor={item.id}>
                        <input
                          name="rating"
                          onChange={this.handleChange}
                          value={item.isSelected}
                          checked={item.isSelected}
                          id={item.id}
                          type="checkbox"
                          className="ng-untouched ng-pristine ng-valid"
                        />{" "}
                        &nbsp;
                        {item.id}{" "}
                        <i className="fa fa-star" aria-hidden="true"></i> &
                        above
                      </label>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
          <div className="col-2 text-right">
            <span>
              <i
                onClick={this.handleS2}
                style={{ fontSize: 10, color: "lightgrey", cursor: "pointer" }}
                className={c2}
              ></i>
            </span>
          </div>
        </div>
        <div className="row bg-white border-top">
          <div className="col-10">
            <div
              className="row ml-1 pb-2"
              style={{
                fontSize: 13,
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: ".3px",
                display: "inline-block",
              }}
            >
              Price
            </div>
            {c3 === "fa fa-chevron-up" ? (
              <React.Fragment>
                {sportsRadio4.map((item, index) => (
                  <div key={index} className="row form-check ml-1 pb-1">
                    <div
                      className="checkbox"
                      style={{
                        verticalAlign: "middle",
                        fontSize: 14,
                        paddingLeft: 11,
                        color: "#212121",
                        display: "inline-block",
                        width: "cal(100% - 25px)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        lineHeight: 1,
                        cursor: "pointer",
                      }}
                    >
                      <label htmlFor={item.id}>
                        <input
                          name="price"
                          onChange={this.handleChange}
                          value={item.isSelected}
                          checked={item.isSelected}
                          id={item.id}
                          type="checkbox"
                          className="ng-untouched ng-pristine ng-valid"
                        />{" "}
                        &nbsp;
                        {item.id}
                      </label>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
          <div className="col-2 text-right">
            <span>
              <i
                onClick={this.handleS3}
                style={{ fontSize: 10, color: "lightgrey", cursor: "pointer" }}
                className={c3}
              ></i>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LeftPannel;
