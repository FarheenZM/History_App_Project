import React, { Component } from 'react';
import './App.css';
import HistoryContainer from './containers/HistoryContainer'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>World History App</h1>
        <HistoryContainer/>
      </React.Fragment>
    );
  }
}

export default App;
