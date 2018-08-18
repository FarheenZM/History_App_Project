import React from 'react'
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import Event from './Event';

const ChartComponent = (props) =>{

 const eventList = props.events.map(event => {
   //console.log(event.year+" "+event.text);
    return <li key={event.year+event.text}>
      <Event
        year={event.year}
        text={event.text}/>
      </li>
  })

  return (
    <div className="chart-container">
    <ol className="event-list">{eventList}
    </ol>
    </div>
  )
}


export default ChartComponent;
