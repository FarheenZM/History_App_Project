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
        <th>EMAiL</th>
        <th>GiTHUB</th>
      </tr>
      <tr>
        <td>Cleyra</td>
        <td>cleyra.uzcategui@gmail.com</td>
        <td>https://github.com/Cleyrauz</td>
      </tr>
      <tr>
        <td>Farheen</td>
        <td>farheenzm@gmail.com</td>
        <td>https://github.com/FarheenZM</td>
      </tr>
      <tr>
        <td>Greg</td>
        <td>g.rutherford10@gmail.com</td>
        <td>https://github.com/grford15</td>
      </tr>
      <tr>
        <td>Harjit</td>
        <td>harjitdhanda0416@gmail.com</td>
        <td>https://github.com/Harjitk</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="headImage">
  <img src="landing-logo.png" className = "headImage" alt="Landing Logo"/>
</div>

</React.Fragment>

);

export default Contact;
