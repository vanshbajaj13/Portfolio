import React, { useState } from "react";

const Header = () => {
  const [navBarToggle, setNavBarToggle] = useState("showNav");

  var oldScrollY = window.scrollY;


  document.addEventListener("scroll", (event) => {
    var scrollDiff = oldScrollY - window.scrollY;
    if (scrollDiff < -7) {
      setNavBarToggle("hideNav-enter");
    } else if (scrollDiff > 7) {
        setNavBarToggle("showNav-enter");
    }
    oldScrollY = window.scrollY;
  });

  return (
    <div>
      <header className={navBarToggle}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      </header>
    </div>
  );
};

export default Header;
