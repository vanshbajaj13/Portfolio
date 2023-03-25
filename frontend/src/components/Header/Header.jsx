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
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#aboutMe">About</a>
          </li>
          <li>
            <a href="#projectPage">Projects</a>
          </li>
          <li>
            <a href="#contactMe">Contact</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
