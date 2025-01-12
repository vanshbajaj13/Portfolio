import Name from "./Name";
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cloud from "../Clouds/Cloud";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const text1 = Array.from("I'm ");
  const text2 = Array.from("Vansh");
  const text3 = Array.from(" bajaj");

  const [loaded, setLoaded] = useState(false);  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("#home").forEach((home) => {
        gsap.fromTo(
          home,
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 1,
            
            
            scrollTrigger: {
              trigger: home,
              // markers: true,
              start: 'top top',
              end: () => "+=" + (home.offsetHeight * 1.2),
              scrub: true,
              pin: true,
              pinSpacing: false,
              onLeave:()=>ScrollTrigger.clearScrollMemory(),
            },
          }
        );
      });
    });
    const chars = document.getElementsByClassName("blast");
    setInterval(()=>{
      var it = Math.floor(Math.random()*(chars.length));
      chars[it].classList.add("rubber");
      // console.log(it);
      setTimeout(() => {
        chars[it].classList.remove("rubber");
        // console.log("done");
      }, 1000);
    },1500)

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="myInfo-container section panel" id="home">
      <div className="bgImg">
        <img src="Images/IMG_1336.jpg" alt="my pic" className="imgTop" style={loaded ? {} : {display: 'none'}} onLoad={()=>{setLoaded(true)}} />
        <img src="Images/bg.svg" alt="my pic" style={loaded ? {display: 'none'} : {}}/> 
      </div>
      <div className="nameTextDiv">
        <Cloud/>
        <h1 className="green">Hii</h1>
        <h1>
          <span>
            {text1.map((ch, index) => {
              return <Name char={ch} key={index} />;
            })}
          </span>
          <span>
            {text2.map((ch, index) => {
              return <Name char={ch} key={index} />;
            })}
          </span>
          <span>
            {text3.map((ch, index) => {
              return <Name char={ch} key={index} />;
            })}
          </span>
        </h1>
        <p>Full stack web developer</p>
      </div>
    </div>
  );
};

export default Home;
