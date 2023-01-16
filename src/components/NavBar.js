import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const myLinks = links.map((link) =>{
    return (<a key={link}>{links}</a>)
  })

  return (
  <nav>
    <a href="#home">home</a>{/* display an <a> tag for each link here */}
    <a href="#about">about</a>
    <a href="#projects">projects</a>
  </nav>);
}

export default NavBar;
