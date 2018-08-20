import React, { Component } from 'react';
import './App.css';
import HistoryContainer from './containers/HistoryContainer'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HistoryContainer/>
      </React.Fragment>
    );
  }
}

export default App;
