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

  
  function downloadResume() {
    // Replace FILE_ID with the actual file ID from your Google Drive link
    const fileId =
      "https://drive.google.com/file/d/1f2tCJX8vnnkY2c8-XwcHYFMicsywHp6Q/view?usp=sharing";
    window.open(`${fileId}`);
  }

  return (
    <div>
      <header className={navBarToggle}>
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#projectPage">Projects</a>
          </li>
          <li>
            <a href="#contactMe">Contact</a>
          </li>
          <li>
            <a href="#aboutMe" onClick={downloadResume} >Resume</a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
