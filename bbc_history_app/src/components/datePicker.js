import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class datePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
    let string = JSON.stringify(date._d)
    let getMonth = string.slice(6, 8)
    let getDay = string.slice(9, 11)

    console.log(getMonth);
    console.log(getDay);
    this.props.onDatePicked(getMonth, getDay)
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholderText="Click to select a date"
    />;
  }
}

export default datePicker;
