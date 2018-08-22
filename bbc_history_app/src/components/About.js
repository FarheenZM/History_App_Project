import React from "react";
import "./About.css"

const About = () => (
  <div>
    <div>
      <div className="logo">
        <img src="HistoryLogo.png" className = "logo" alt="App Logo"/>
      </div>
      <div className="headImage">
        <img src="landing-logo.png" className = "headImage" alt="Landing Logo"/>
      </div>
      <div className="about-us">
        <h1>The App</h1>
        <p><b>BBC Walk In History</b> is a user friendly educational app built using <i>JavaScript</i> and <i>React</i> for anyone
        wishing to improve their history knowledge!<br></br>
        <br></br>
        This application shows all the events 'today in history' and also allows the user to see a particular day's events by selecting that date from the calender and
        these events are displayed in an interactive timeline.<br></br>
        <br></br>
        Also, clicking on different category buttons like 'Births' & 'Deaths' enables user to filter events by that particular category.
      </p>
    </div>
  </div>


</div>

);


export default About;
