import React, {Component} from 'react';
import Display from './Display.js';
import Form from './Form.js';
import getForecast from '../api/openWeatherMap.js';

class ForecastWidget extends Component{
    state = {
        name: '',
        temp: '',
        main: '',
        icon: ''
    };


    handleCoordinateSearch = (x, y)  => {
        let that = this;

        getForecast.forCoordinates(x, y)
        .then(weather => {
          that.setState({
            name: weather.name,
            temp: weather.main.temp,
            cond: weather.weather[0].main,
            icon: weather.weather[0].icon
          });
        });
    }

    handleCitySearch = (location) => {
        let that = this;

        getForecast.forCity(location)
        .then(weather => {
          that.setState({
            name: weather.name,
            temp: weather.main.temp,
            cond: weather.weather[0].main,
            icon: weather.weather[0].icon
          });
        });
    }

    render() {
        return (
        <div>
            <h1>Weather widget</h1>
            <Display {...this.state}/>
            <Form
                onLocationSearch={this.handleCitySearch}
                onCoordinateSearch={this.handleCoordinateSearch}
            />
        </div>
        );
    }
}

export default ForecastWidget;
