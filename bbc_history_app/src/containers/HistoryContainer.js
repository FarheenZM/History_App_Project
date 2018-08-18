import React, {Component} from 'react';
import EventList from '../components/EventList'

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
        {/* <EventList events={this.state.events}/>
        <ChartComponent chartEvents={this.state.events}/> */}
      </React.Fragment>

    );
  }
}

export default HistoryContainer;
