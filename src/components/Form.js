import React from 'react';

class Form extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          location: 'bar'
      };

    this.handleQueryWeather.bind(this);
  }


  handleLocationInput = (e) => {
    this.setState({
      location: e.target.value
    });

  }

  handleDetectWeather = () => {
   
    navigator.geolocation.getCurrentPosition(position => {
      this.props.onCoordinateSearch(position.coords.latitude, position.coords.longitude);
    });
    this.setState({
      location: ''
    });
  }

  handleQueryWeather = () => {
    this.props.onLocationSearch(this.state.location);
    this.setState({
      location: ''
    });
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type='text' 
            onChange={this.handleLocationInput} 
            placeholder='Enter a place'
            value={this.state.location}
          />
          <button onClick={this.handleQueryWeather}>Search for weather somewhere</button>
          <button onClick={this.handleDetectWeather}>Get my weather here</button>
        </form>
      </div>
    );
  }
};

export default Form;
