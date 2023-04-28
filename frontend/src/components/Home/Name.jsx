import React from 'react'
import { useEffect } from 'react';

const Name = (props) => {
  useEffect(() => {
    const sp = document.getElementsByClassName("blast");
    for(let i = 0 ; i < (sp).length ;i++){
        sp[i].addEventListener("mouseover",()=>{
            sp[i].classList.add("rubber");
            setTimeout(() => {
                sp[i].classList.remove("rubber");
            }, 1000);
        })
    }
}, [])
  return (
        <span className="blast">
            {props.char}
        </span>  
  )
}

export default Name 