import React, {Component} from 'react';
import EventList from '../components/EventList'
import { Chart } from 'react-google-charts';

class ChartContainer extends Component {

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
    // return (
    //   <React.Fragment>
    //     <EventList events={this.state.events}/>
    //   </React.Fragment>
    //
    // );
    return(
      <ChartComponent events={this.state.events}/>
    );
  }
}

// graph stuff starts
const options = {
  title: 'Events per year',
  hAxis: { title: 'Year', viewWindow: { min: 309, max: 2017 } },
  // vAxis: { title: 'Weight', viewWindow: { min: 0, max: 15 } },
  legend: 'none'
};

// const data = []
// data.push(['Year', 'Event'])
// for (var i=0; i<this.props.events.length; i++) {
//   data.push([this.props.events[i]["year"], this.props.events[i]["year"]])
// }
//
// data.push([309, 500])

// const data = [
//  ['Year', 'Event'],
//  [309, 500],
//  [1400, 6000],
//  [1800, 700],
//  [400, 500],
//  [1989, 800],
//  [2001, 5000],
//  [2004, 700],
//  [2010, 7000],
//  [2017, 50]
// ];

class ChartComponent extends Component {

  render() {
    const data = []
  // for (var i=0; i<this.props.events.length; i++) {
  //   data.push(['Year', `text: + ${this.props.events[i]["text"]`])
  // }

  data.push(['Year', "ToDo"])

    for (var i=0; i<this.props.events.length; i++) {
      data.push([parseInt(this.props.events[i]["year"], 10), 200  ])
    }

    return (
      <Chart
        chartType='ScatterChart'
        data={data}
        options={options}
        width='100%'
        height='400px'
        legendToggle
      />
    );
  };
}
  // graph stuff ends

  export default ChartContainer;
