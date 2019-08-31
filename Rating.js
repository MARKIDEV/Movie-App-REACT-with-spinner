import React from "react";

export default function Rating(props) {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    if (i < props.rate) {
      //<= le problème!!!
      arr.push(<span>★</span>);
    } else {
      arr.push(<span>☆</span>);
    }
  }
  return <div className="poster"> {arr}</div>;
}
