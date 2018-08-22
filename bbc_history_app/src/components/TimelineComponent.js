import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimelineComponent = (props) => {
    return(
      <VList VListData = {props.events}/>
    )
  }


const VList = (props) =>  {

    const allEvents = props.VListData.map((event, index) => {
      return (
        <VLElement key={index} VLIndex={index+1} VLElementData={event}/>
      )
    });

    return(
      <div>
        <VerticalTimeline className='verticalTimeline'>
          {allEvents}
        </VerticalTimeline>
      </div>
    )
  }


const VLElement = (props) =>  {
    return(
      <div>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date= {props.VLElementData["year"]}
          iconStyle={{ background: 'orange', color: '#fff' }}
          position= {(props.VLIndex % 2) ? "left" : "right"}>

          <h2>{props.VLElementData["year"]}</h2>
          <h3 className="vertical-timeline-element-title">{props.VLElementData["text"]}</h3>
          {props.VLElementData["links"].length > 1 ? <h4 className="vertical-timeline-element-subtitle"><button><a href={props.VLElementData["links"][0]["link"]}>Wiki Link<img className="wikilink" src="wiki_icon.png" height="23" width="32" alt="bbc wiki logo"/></a></button></h4> : null}
          <img src="feet-icon.png" height="100" width="130" alt="feet logo"/>
        </VerticalTimelineElement>

      </div>

    )
}


export default TimelineComponent;
