import React, { useEffect, useState } from "react";
import Drop from "./Drop";

const Cloud = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const tooltipInterval = setInterval(() => {
      setShowTooltip((prev) => !prev);
    }, 5000);

    return () => clearInterval(tooltipInterval);
  }, []);

  var drop = [];
  for (let i = 0; i < 20; i++) {
    drop[i] = i;
  }

  function downloadResume() {
    // Replace FILE_ID with the actual file ID from your Google Drive link
    const fileId =
      "https://drive.google.com/file/d/1f2tCJX8vnnkY2c8-XwcHYFMicsywHp6Q/view?usp=sharing";
    window.open(`${fileId}`);
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

  useEffect(() => {
    const rainChangeInterval = setInterval(() => {
      changeRain();
    }, 5000);

    return () => {
      clearInterval(rainChangeInterval);
    };
  }, []);

  return (
    <div className="cloudContainer" onClick={downloadResume}>
      <div id="cloud" onClick={changeRain}>
        <span className="shadow"></span>
        <div className="rain">
      <div className={`tooltip ${showTooltip ? "show" : ""}`}>
        Resume
      </div>
          {drop.map((dr) => {
            return <Drop key={dr} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cloud;
