import react from 'react';
import weatherThings from '../../api/weatherThing.jsx';
import Display from './Display.jsx';
import Form from './Form.jsx';

class ForecastWidget extends React.Component{
    constructor(props) {
        super(props);
         this.state = {
            location: 'foo',
            forecast: null
        };
    }
    handleCoordinateSearch(x, y) {
        this.setState({forecast});
    }

    handleCitySeaerch(location) {
        this.setState({forecast})
    }

    render() {
        <div>
            <Display location={location} forecast={forecast}/>
            <Form/>
        </div>
    }
}

export default ForecastWidget;