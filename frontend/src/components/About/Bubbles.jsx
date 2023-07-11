import React from 'react'

const Bubbles = (props) => {
//   useLayoutEffect(() => {
//     const bubbles = document.getElementsByClassName("bubbleText");
//     setInterval(()=>{
//       var it = Math.floor(Math.random()*(bubbles.length));
//       bubbles[it].classList.add("green");
//       // console.log(it);
//       setTimeout(() => {
//         bubbles[it].classList.remove("green");
//         // console.log("done");
//       }, 5000);
//     },4500)
// }, [])
  return (
    <div className='bubble bubbleMove'>
        <p className='bubbleText'>
          {props.text}
        </p>
    </div>
  )
}

export default Bubbles  