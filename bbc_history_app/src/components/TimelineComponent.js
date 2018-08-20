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
        <VerticalTimeline>
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

          <h3 className="vertical-timeline-element-title">{props.VLElementData["text"]}</h3>
          <h4 className="vertical-timeline-element-subtitle"><a href={props.VLElementData["links"][0]["link"]}>More info</a></h4>

          {/* <p><img src='https://upload.wikimedia.org/wikipedia/commons/4/49/East-Hem_900ad.jpg' height='150' widht='150'/></p> */}

          {/* <img src='https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=Nikephoros_II_Phokas'["query"]["pages"].values[0]["original"]["source"] /> */}

        </VerticalTimelineElement>

      </div>

    )
}


export default TimelineComponent;
