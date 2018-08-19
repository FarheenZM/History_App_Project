import React, {Component} from 'react';
import EventList from '../components/EventList'
import ChartComponent from '../components/ChartComponent'
import TimelineComponent from '../components/TimelineComponent'


class HistoryContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      events: []
    };
  }

  componentDidMount(){
    fetch('http://localhost:3001/data')
    .then(response => response.json())
    .then(events => this.setState({events: events["data"]["Events"]}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <EventList events={this.state.events}/>
        <ChartComponent events={this.state.events}/>
        <TimelineComponent events={this.state.events}/>
      </React.Fragment>

    );
  }
}

export default HistoryContainer;
