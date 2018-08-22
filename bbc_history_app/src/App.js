import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import HistoryContainer from "./containers/HistoryContainer"


class App extends Component {
  render() {
    return(

      <Router>
        <React.Fragment>
          <div>
            <NavBar/>
            <Route exact path="/" component={HistoryContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
          
        </React.Fragment>
      </Router>
    )
  }
}


export default App;
