import React, {Component} from 'react';
import ForecastWidget from './ForecastWidget.js';

class Main extends Component {

  render() {
    return (
      <div>
        <ForecastWidget/>
        <ForecastWidget/>
      </div>
    );
  }
};

export default Main;
