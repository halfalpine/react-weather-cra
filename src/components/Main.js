import React from 'react';;
import ForecastWidget from '/.ForecastWidget';

class Main extends React.Component {
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
