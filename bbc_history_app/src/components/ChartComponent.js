import React from 'react'
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

const chartEvents = [
 {
   eventName: 'select',
   callback(chartWrapper) {
     console.log('Selected', chartWrapper.getChart().getSelection());
   }
 }
];

const options = {
 title: 'Events per year',
 hAxis: { title: 'Year', viewWindow: { min: 309, max: 2017 } },
 // vAxis: { title: 'Weight', viewWindow: { min: 0, max: 15 } },
 legend: 'none'
};
const data = [
 ['Year', 'Event'],
 [309, 'A'],
 [1400, 'B'],
 [1800, 'C'],
 [400, 'D'],
 [1989, 'E'],
 [2001, 'F'],
 [2004, 'G'],
 [2010, 'H'],
 [2017, 'I']
];

const ChartComponent = () => {
 return (
   <Chart
     chartType='ScatterChart'
     data={data}
     options={options}
     width='80%'
     height='400px'
     legendToggle
   />
 );
};

// render(<ChartComponent />, document.getElementByID('app'));

export default ChartComponent;
