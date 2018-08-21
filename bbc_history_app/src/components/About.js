import React from "react";
import "./About.css"

const About = () => (
  <React.Fragment>
    <div className="logo">
      <img src="HistoryLogo.png" className = "logo" alt="App Logo"/>
  </div>
<div className="about-us">
  <h1>About Us</h1>
  <p>BBC Walk In History is an educational app built using JavaScript and React for anyone
    wishing to improve their history knowledge!
    This application allows the user to select a particular date from the calender and
    these events are displayed in an interactive
    timeline. The user is also able to filter events by births and deaths.
  </p>
</div>
<div className="headImage">
  <img src="landing-logo.png" className = "headImage" alt="Landing Logo"/>
</div>
</React.Fragment>

);


export default About;
