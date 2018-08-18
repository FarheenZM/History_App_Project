import React from "react";

const Event = (props) => {

  if(!props.year){
      return null;
  }
  return (

    <React.Fragment>
         <p>Year: {props.year}</p>
         <p>Text: {props.text}</p>
       </React.Fragment>)
}

export default Event;
