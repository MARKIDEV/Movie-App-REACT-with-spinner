import React from "react";
import Rating from "./Rating.js";

const MovieCard = props => {
  return (
    <div className="container">
      {props.card.map(el => (
        <div className="card">
          <div className="poster" >
            <img src={el.poster} />
            <p> Rated :  </p>
          <Rating rate={el.rating}/> 
          </div>
          <div className="content">
            <h1>{el.title}</h1>
            <p>{el.description}</p> 
            <p>Released on : { el.release}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieCard;
