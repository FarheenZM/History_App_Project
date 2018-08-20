import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import HistoryContainer from "../containers/HistoryContainer"


const MainNav = () => {

  return(

    <Router>
      <React.Fragment>
        <div>
          <NavBar/>
          <Route exact path="/data" component={HistoryContainer}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </React.Fragment>
    </Router>
  )
}

export default MainNav;
