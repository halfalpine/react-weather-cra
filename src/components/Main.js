import React, {Component} from 'react';
import ForecastWidget from './ForecastWidget.js';

class Main extends Component {
  constructor(props) {
    super(props);
  }

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
