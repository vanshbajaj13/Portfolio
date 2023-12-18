import React from 'react'

const Meteor = () => {
    var top = Math.random()*100;
    var left = Math.random()*100;
    var time = (Math.random()*8)+4;
    var delay = (Math.random());
    var meteor = Math.floor(Math.random()*3);
    if (meteor < 1) {
        meteor = "meteor "
    } else {
        meteor = "meteor yellowMeteor"
    }
    top += "%";
    left += "%";
    time += "s";
    delay += "s";
  return (
    <div className={meteor} style={{top: top,left:left,animationDuration:time,animationDelay:delay}}></div>
  )
}

export default Meteor