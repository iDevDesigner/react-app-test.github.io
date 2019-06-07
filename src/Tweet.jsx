import React from "react";

function Tweet({ name, likes, message }) {
  return (
    <div className="tweet">
      <h2> {name} </h2>
      <p>
        Tweet: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
        dolorum consequuntur delectus eveniet voluptatum cumque incidunt animi
        laudantium dolore modi.
      </p>
      <p>{message}</p>
      <h3>Likes:{likes}</h3>
    </div>
  );
}

export default Tweet;
//||(props)
// or Case
// {props.name}
// {props.likes}
