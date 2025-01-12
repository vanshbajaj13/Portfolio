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


  return (
    <div className="cloudContainer" onClick={downloadResume}>
      <div id="cloud">
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
