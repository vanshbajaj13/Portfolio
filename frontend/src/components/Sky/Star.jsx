import React from 'react'

const Star = () => {
    var top = Math.random()*100;
    var left = Math.random()*100;
    var time = (Math.random()*3)+1;
    top += "%";
    left += "%";
    time += "s";
  return (
    <div className="star" style={{top: top,left:left,animationDuration:time}}></div>
  )
}

export default Star