import React from 'react'

const Star = () => {
    var top = Math.random()*100;
    var left = Math.random()*100;
    var time = (Math.random()*9)+1;
    var star = Math.floor(Math.random()*3);
    if (star < 1) {
        star = "star whiteStar"
    } else {
        star = "star yellowStar"
    }
    top += "%";
    left += "%";
    time += "s";
  return (
    <div className={star} style={{top: top,left:left,animationDuration:time}}></div>
  )
}

export default Star