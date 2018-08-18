import React, {Component} from 'react';
import EventList from '../components/EventList';
import Calendar from 'react-calendar';

class HistoryContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    fetch('http://localhost:3001/data')
    .then(response => response.json())
    .then(data => this.setState({data}))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h1>What happened on .. {this.state.data.date}</h1>
        <Calendar />
        <EventList events={this.state.events}/>
      </React.Fragment>

    );
  }
}

export default HistoryContainer;
