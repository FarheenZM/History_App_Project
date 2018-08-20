import React, {Component} from 'react';
import TimelineComponent from '../components/TimelineComponent';
import DatePicker from '../components/datePicker';

import 'react-datepicker/dist/react-datepicker.css';

class HistoryContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      events: [],
      showEvents: true,

      births: [],
      showBirths: false,

      deaths: [],
      showDeaths: false
    };

    this.handleEventsButtonClick = this.handleEventsButtonClick.bind(this);
    this.handleBirthsButtonClick = this.handleBirthsButtonClick.bind(this);
    this.handleDeathsButtonClick = this.handleDeathsButtonClick.bind(this);
    this.loadAPIFunction = this.loadAPIFunction.bind(this);
  }

  componentDidMount(){
    this.loadAPIFunction();
  }

  loadAPIFunction(month, day){
    let url = day && month ? `http://localhost:3001/data/${month}/${day}` : "http://localhost:3001/data/"
    fetch(url)
    .then(response => response.json())
    .then(events => this.setState({events: events["data"]["Events"], births: events["data"]["Births"], deaths: events["data"]["Deaths"]}))
    .catch(err => console.log(err));
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
        <div className="logo">
          <img src="HistoryLogo.png" className = "logo" alt="App Logo"/>
        </div>
        <div id="header_image">
        <button onClick={this.handleEventsButtonClick}>DiSPLAY EVENTS </button>
        <button onClick={this.handleBirthsButtonClick}>DiSPLAY BiRTHS </button>
        <button onClick={this.handleDeathsButtonClick}>DiSPLAY DEATHS </button>
        </div>

        <DatePicker
        selected={this.state.date}
        onDatePicked={this.loadAPIFunction}
      />

        {/* First button display */}
        {this.state.showEvents ?
          (<div>
            <TimelineComponent events={this.state.events}/></div>) :
            null
          }

          {/* Second button display */}
          {this.state.showBirths ?
            (<div>
              <TimelineComponent events={this.state.births}/></div>) :
              null
            }

            {/* Third button display */}
            {this.state.showDeaths ?
              (<div>
                <TimelineComponent events={this.state.deaths}/></div>) :
                null
              }

            </React.Fragment>


          );
        }
      }

      export default HistoryContainer;
