import React from "react";
import "./Contact.css"

const Contact = () => (

  <React.Fragment>
    <div className="logo">
      <img src="HistoryLogo.png" className = "logo" alt="App Logo"/>
    </div>
    <div className="contact-info">
      <h1>The Team</h1>
      <table>
        <tbody>
          <tr>
            <th>NAME</th>
            <th><img src="email_logo.png" height="50" width="50" alt="email logo"/></th>
            <th><img src="git_logo.png" height="50" width="50" alt="github logo"/></th>
          </tr>
          <tr>
            <td>Cleyra</td>
            <td><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">cleyra.uzcategui@gmail.com</a></td>
            <td><a href="https://github.com/Cleyrauz">https://github.com/Cleyrauz</a></td>
          </tr>
          <tr>
            <td>Farheen</td>
            <td><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">farheenzm@gmail.com</a></td>
            <td><a href="https://github.com/FarheenZM">https://github.com/FarheenZM</a></td>
          </tr>
          <tr>
            <td>Greg</td>
            <td><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">g.rutherford10@gmail.com</a></td>
            <td><a href="https://github.com/grford15">https://github.com/grford15</a></td>
          </tr>
          <tr>
            <td>Harjit</td>
            <td><a href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">harjitdhanda0416@gmail.com</a></td>
            <td><a href="https://github.com/Harjitk">https://github.com/Harjitk</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="headImage">
      <img src="landing-logo.png" className = "headImage" alt="Landing Logo"/>
    </div>

    <footer>
      <p className="copyright">&copy; Walk in History 2018</p>
    </footer>

  </React.Fragment>

);

export default Contact;
