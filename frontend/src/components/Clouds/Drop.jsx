import React from 'react'

const Drop = () => {
    var left = Math.random()*100;
    var time = (Math.random()+0.6);
    var delay = (Math.random());
    left += "%";
    time += "s";
    delay += "s";
  return (
    <div className="drop" style={{left:left,animationDuration:time,animationDelay:delay}}></div>
  )
}

export default Drop