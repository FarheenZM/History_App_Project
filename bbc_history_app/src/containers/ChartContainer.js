import React, {Component} from 'react';
import EventList from '../components/EventList'
import { Chart } from 'react-google-charts';
import ChartComponent from '../components/ChartComponent';
import TimeLine from '../components/TimeLine';

class ChartContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/data")
    .then(response => response.json())
    .then(events => this.setState({events: events.data.Events}))
    .catch(err => console.log(err));
  }

  render() {
    console.log('Events:');
    console.log(this.state.events);
    return(
      <React.Fragment>
        <TimeLine events = {this.state.events}/>
      </React.Fragment>
    );
  }

}
  export default ChartContainer;
