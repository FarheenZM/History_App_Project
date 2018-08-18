import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Event from './Event';
import { render } from 'react-dom';

const TimeLine = (props) =>{
 const eventList = props.events.map(event => {
   //console.log(event.year+" "+event.text);
    return <VerticalTimelineElement
      key={event.year + event.text}
      className="vertical-timeline-element--work"
      date={event.year}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

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
