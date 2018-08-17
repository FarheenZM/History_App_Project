import React, {Component} from 'react';
import EventList from '../components/EventList';
import Calendar from 'react-calendar';

class HistoryContainer extends Component {

  constructor(props){
    super(props)
    this.logState = this.logState.bind(this);
    this.state = {
      events: [],
      date: new Date()
    };
  }


  componentDidMount(){
    fetch('http://localhost:3001/data')
    .then(response => response.json())
    .then(events => this.setState({events: events["data"]["Events"]}))
    .catch(err => console.log(err));
  }

  getEvents(day){
    fetch('http://localhost:3001/data/date/' + day)
  }

  onChange = date => this.setState({date})

  logState(){
    console.log(this.state.date);
  }

  render() {
    return (
      <React.Fragment>
        <Calendar
          onChange={this.onChange}
          // onChange={this.logState}
          value={this.state.date}
        />
        <EventList events={this.state.events}/>
      </React.Fragment>

    );
  }
}

export default HistoryContainer;
