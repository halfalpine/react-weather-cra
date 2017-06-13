import react from 'react';
import weatherThings from '../../api/weatherThing.jsx';
import Display from './Display.jsx';
import Form from './Form.jsx';

class ForecastWidget extends React.Component{
         state = {
            forecast: null
        };
    

    handleCoordinateSearch(x, y) {
        this.setState({forecast});
    }

    handleCitySearch(location) {
        console.log('searching');
        // this.setState({forecast});
    }

    render() {
        <div>
            <Display location={location} forecast={forecast}/>
            <Form 
                onLocationSearch={this.handleCitySeaerch}
                onCoordinateSearch={this.handleCoordinateSearch}
            />
        </div>
    }
}

export default ForecastWidget;