import React, {Component} from 'react';
import TimelineComponent from '../components/TimelineComponent'
import MainNav from "../components/MainNav"

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
  }

  componentDidMount(){
    fetch('http://localhost:3001/data')
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

        <MainNav/>

        <button onClick={this.handleEventsButtonClick}>Display Events </button>
        <button onClick={this.handleBirthsButtonClick}>Display Births </button>
        <button onClick={this.handleDeathsButtonClick}>Display Deaths </button>

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
