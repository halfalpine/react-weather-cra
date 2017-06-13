import React, {Component} from 'react';
import Display from './Display.js';
import Form from './Form.js';

class ForecastWidget extends Component{
    state = {
        forecast: null
    };
    

    handleCoordinateSearch(x, y) {
        console.log('calling handleCoordinateSearch');
        // this.setState({forecast});
    }

    handleCitySearch(location) {
        console.log('searching');
        // this.setState({forecast});
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