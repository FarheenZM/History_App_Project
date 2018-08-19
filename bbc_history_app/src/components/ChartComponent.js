import React from 'react'
// import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

const options = {
  title: 'Events per year',
  hAxis: { title: 'Year', viewWindow: { min: 309, max: 2017 } },
  vAxis: { title: '', viewWindow: { min: 100, max: 300 } },
  legend: 'none'
};

const ChartComponent = (props) => {


    const data = []
    data.push(['Year', "ToDo"])

    for (var i=0; i<props.events.length; i++) {
      data.push([parseInt(props.events[i]["year"], 10), 200  ])
    }

    return (
      <Chart
        chartType='ScatterChart'
        data={data}
        options={options}
        width='100%'
        height='400px'
        legendToggle
      />
    );

}

export default ChartComponent;
