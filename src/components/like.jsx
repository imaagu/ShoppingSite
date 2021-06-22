import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (props.liked) classes += " text-danger";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
