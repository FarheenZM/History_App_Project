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
 ['Year', 'Year'],
 [309, 309],
 [1400, 1400],
 [1800, 1800],
 [1900, 1900],
 [1989, 1989],
 [2001, 2001],
 [2004, 2004],
 [2010, 2010],
 [2017, 2017]
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
