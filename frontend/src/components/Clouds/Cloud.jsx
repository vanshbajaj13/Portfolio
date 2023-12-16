import React from "react";
import Drop from "./Drop";

const Cloud = () => {
  var drop = [];
  for (let i = 0; i < 20; i++) {
    drop[i] = i;
  }
  function changeRain() {
    let dr = document.getElementsByClassName("drop");
    for (let i = 0; i < dr.length; i++) {
        const element = dr[i];
        if (element.style.width === "0.5rem") {
          element.style.width = "0.1rem";
          element.style.height = "0.1rem";
        } else {
            element.style.width = "0.5rem";
            element.style.height = "0.5rem";
        }
    }
  }
  return (
    <div className="cloudContainer">
      <div id="cloud" onClick={changeRain}>
        <span className="shadow"></span>
        <div className="rain">
          {drop.map((dr) => {
            return <Drop key={dr} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cloud;
