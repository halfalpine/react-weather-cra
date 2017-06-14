import React, {Component} from 'react';
import Display from './Display.js';
import Form from './Form.js';
import getForecast from '../api/cityForecast.js';

class ForecastWidget extends Component{
    state = {
        forecast: null
    };
    

    handleCoordinateSearch = (x, y)  => {
        console.log('calling handleCoordinateSearch');
        // this.setState({forecast});
    }

    handleCitySearch = (location) => {
        getForecast.forCity(location)
        .then(stuff => console.log(stuff))

        // this.setState({forecast});
        // console.log('state forecast', this.state.forecast);
    }

    render() {
        return (
        <div>
            <h1>Weather widget</h1>
            <Display forecast={this.state.forecast}/>
            <Form 
                onLocationSearch={this.handleCitySearch}
                onCoordinateSearch={this.handleCoordinateSearch}
                dirk='foo bar'
            />
        </div>
        ); 
    }
}

export default ForecastWidget;