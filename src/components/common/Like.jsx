import React from "react";

//OUTS: how to add clickable class to className?
const Like = ({ liked, onLike }) => {
  return (
    <i
      className={liked ? "fas fa-heart" : "far fa-heart"}
      onClick={onLike}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
