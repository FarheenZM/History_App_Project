import React, {Component} from 'react';
import TimelineComponent from '../components/TimelineComponent'

class HistoryContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      events: [],
      showEvents: true,

      births: [],
      showBirths: false,

      deaths: [],
      showDeaths: false
    };

    this.handleEventsButtonClick = this.handleEventsButtonClick.bind(this);
    this.handleBirthsButtonClick = this.handleBirthsButtonClick.bind(this);
    this.handleDeathsButtonClick = this.handleDeathsButtonClick.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3001/data')
    .then(response => response.json())
    .then(events => this.setState({events: events["data"]["Events"], births: events["data"]["Births"], deaths: events["data"]["Deaths"]}))
    .catch(err => console.log(err));
  }

  handleEventsButtonClick(){
    this.setState({showEvents: true, showBirths: false, showDeaths: false})
  }

  handleBirthsButtonClick(){
    this.setState({showBirths: true, showEvents: false, showDeaths: false})
  }

  handleDeathsButtonClick(){
    this.setState({showDeaths: true, showEvents: false, showBirths: false})
  }

  render() {

    return (
      <React.Fragment>
        <div className="logo">
          <img src="https://a72821ff-a-62cb3a1a-s-sites.googlegroups.com/site/imagenescleyra/logo.png?attachauth=ANoY7coLmdNNvhmrJwC10uStlQ8JDnJTFxKUv3BmHuMYtkaqPFi_g6QhdoMOeHYX-sYV7xC27eQu89CuQl_LGRp0chK0weKOlkLg3b5qlCkQ5c7KTqESOgTaSGOIQKJPbyhVc9sCyTcN02J86qP6ELpFpLVKc1khlTSv_qO-YHLkcEpGcy5gJub82A8FTkH9wkzcw_MYEYUe21Ve7hkqj7HQx3YnusW67w%3D%3D&attredirects=0" className = "logo" alt="App Logo"/>
        </div>
        <div id="header_image">
        <button onClick={this.handleEventsButtonClick}>DiSPLAY EVENTS </button>
        <button onClick={this.handleBirthsButtonClick}>DiSPLAY BiRTHS </button>
        <button onClick={this.handleDeathsButtonClick}>DiSPLAY DEATHS </button>
        </div>

        {/* First button display */}
        {this.state.showEvents ?
          (<div>
            <TimelineComponent events={this.state.events}/></div>) :
            null
          }

          {/* Second button display */}
          {this.state.showBirths ?
            (<div>
              <TimelineComponent events={this.state.births}/></div>) :
              null
            }

            {/* Third button display */}
            {this.state.showDeaths ?
              (<div>
                <TimelineComponent events={this.state.deaths}/></div>) :
                null
              }

            </React.Fragment>


          );
        }
      }

      export default HistoryContainer;
