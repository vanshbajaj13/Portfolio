import React from "react";
import Star from "./Star";

export const Sky = (props) => {
  var stars = [];
  for (let i = 0; i < props.count; i++) {
    stars[i] = i;
  }
  return (
    <div>
      <section className="sky">
        {stars.map((star) => {
          return <Star key={star} />;
        })}
      </section>
    </div>
  );
};
