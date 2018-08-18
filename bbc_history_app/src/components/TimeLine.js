import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Event from './Event';
import { render } from 'react-dom';

const TimeLine = (props) =>{

  function getPosition(n) {
    if(n % 2 == 0){
     return "right";
   }else{
     return "left";
   }
  }


 const eventList = props.events.map((event, index) => {
   //console.log(event.year+" "+event.text);
    return <VerticalTimelineElement
      key={index}
      className="vertical-timeline-element--work"
      date={event.year}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      position={getPosition(index)}>

      <h3 className="vertical-timeline-element-title">{event.year}</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      {event.text}
    </p>
  </VerticalTimelineElement>
})

  return (
  <VerticalTimeline>
    {eventList}
  </VerticalTimeline>
  )
}

export default TimeLine;
