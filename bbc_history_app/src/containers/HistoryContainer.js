import React, {Component} from 'react';
import EventList from '../components/EventList'
import ChartComponent from '../components/ChartComponent'
import TimelineComponent from '../components/TimelineComponent'
import Calendar from 'react-calendar'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class HistoryContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      startDate: moment(),

      events: [],
      showEvents: false,

      births: [],
      showBirths: false,

      deaths: [],
      showDeaths: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEventsButtonClick = this.handleEventsButtonClick.bind(this);
    this.handleBirthsButtonClick = this.handleBirthsButtonClick.bind(this);
    this.handleDeathsButtonClick = this.handleDeathsButtonClick.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3001/data')
    .then(response => response.json())
    .then(events => this.setState({events: events["data"]["Events"], births: events["data"]["Births"], deaths: events["data"]["Deaths"]}))
    .catch(err => console.log(err));
  }

  handleChange(date) {
  this.setState({
    startDate: date
  });
}

  handleEventsButtonClick(){
    this.setState({showEvents: true, showBirths: false, showDeaths: false})
  }

  handleBirthsButtonClick(){
    this.setState({showBirths: true, showEvents: false, showDeaths: false})
  }

  handleDeathsButtonClick(){
    this.setState({showDeaths: true, showEvents: false, showBirths: false})
  }

  render() {

    return (
      <React.Fragment>

        {/* <Calendar /> */}

        <DatePicker selected={this.state.startDate}
        onChange={this.handleChange} dropdownMode='select'/>

        {("0" + (this.state.startDate.month() + 1)).slice(-2)}   {("0" + this.state.startDate.date()).slice(-2)}

        <button onClick={this.handleEventsButtonClick}>Display Events </button>
        <button onClick={this.handleBirthsButtonClick}>Display Births </button>
        <button onClick={this.handleDeathsButtonClick}>Display Deaths </button>

        {/* First button display */}
        {this.state.showEvents ?
        (<div id="1">
          <EventList events={this.state.events}/>
          <ChartComponent events={this.state.events}/>
          <TimelineComponent events={this.state.events}/></div>) :
        null
        }

        {/* Second button display */}
        {this.state.showBirths ?
        (<div id="2">
          <EventList events={this.state.births}/>
          <ChartComponent events={this.state.births}/>
          <TimelineComponent events={this.state.births}/></div>) :
        null
        }

        {/* Third button display */}
        {this.state.showDeaths ?
        (<div id="3">
          <EventList events={this.state.deaths}/>
          <ChartComponent events={this.state.deaths}/>
          <TimelineComponent events={this.state.deaths}/></div>) :
        null
        }

      </React.Fragment>

    );
  }
}

export default HistoryContainer;
