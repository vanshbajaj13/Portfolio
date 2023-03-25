import Name from "./Name";
import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const text1 = Array.from("I'm ");
  const text2 = Array.from("Vansh");
  const text3 = Array.from(" bajaj");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("#home").forEach((home) => {
        console.log(home.offsetWidth);
        // console.log(gsap.utils.("#home"));
        gsap.fromTo(
          home,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            
            
            scrollTrigger: {
              trigger: home,
              // markers: true,
              start: "center center",
              end: () => "+=" + (home.offsetHeight * 2),
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="myInfo-container section" id="home">
      <div className="bgImg">
        <img src="Images/IMG_1337.jpg" alt="my pic" />
      </div>
      <div className="nameTextDiv">
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
