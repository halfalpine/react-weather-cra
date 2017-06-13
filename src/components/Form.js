import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'bar'
    }
  }

  handleLocationInput(e) {
    this.setState({
      location: e.target.value
    });
  }

  handleDetectWeather() {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.handleLocationSearch(position.coords.latitude, position.coords.longitude);
    });
    this.setState({
      location: ''
    });
  }

  handleQueryWeather() {
    this.props.handleWeatherSearch(this.state.location);
    this.setState({
      location: ''
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={handleLocationInput} ref='location' placeholder='Enter a place'/>
          <button onClick={handleQueryWeather}>Search for weather somewhere</button>
          <button onClick={handleDetectWeather}>Get my weather here</button>
        </form>
      </div>
    );
  }
};

export default Form;
