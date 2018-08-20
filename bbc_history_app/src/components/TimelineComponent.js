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
        <VerticalTimeline className='something'>
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
          {props.VLElementData["links"].length > 1 ? <h4 className="vertical-timeline-element-subtitle"><a href={props.VLElementData["links"][0]["link"]}>Wiki Link</a></h4> : null}
          <img src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1896521/1161/770/m1/fpnw/wm0/feet-icon-vector-.jpg?1479197828&s=62c4de3a3a7fa990058911a67b405899" height="100" width="130"/>
        </VerticalTimelineElement>

      </div>

    )
}


export default TimelineComponent;
