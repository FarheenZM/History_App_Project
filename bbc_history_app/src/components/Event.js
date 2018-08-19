import React from "react";

const Event = (props) => {
  return(
      <div>
      <b>{props.event["year"]} : </b>
      {props.event["text"]}
      </div>
  )
}

export default Event;
