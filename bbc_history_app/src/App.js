import React, { Component } from 'react';
import './App.css';
//import HistoryContainer from './containers/HistoryContainer'
import ChartContainer from './containers/ChartContainer'
//import ChartComponent from './components/ChartComponent'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Our World History App</h1>
        <h2>More details here</h2>
        {/* <HistoryContainer/> */}
        <ChartContainer/>
        {/* <ChartComponent/> */}
      </React.Fragment>
    );
  }
}

export default App;
