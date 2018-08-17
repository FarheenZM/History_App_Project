import React from 'react';
import Event from './Event.js'

const EventList = (props) => {
  if(!props.events) return null;


  const allEvents = props.events.map((event, index) => {
    return (
      <Event key={index} position={index+1} event={event}/>
    )
  });

  return(
    <div>
      {allEvents}

    </div>
  )
}

export default EventList;
