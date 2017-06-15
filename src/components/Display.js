import React from 'react';

class Display extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {name, temp, cond} = this.props;
    // const temp = this.props.weather.main || '';
    // const main = this.props.weather.weather.main;
    // const description = this.props.weather.weather.description;
    // const {temp, rain, clouds} = this.props.forecast;
    const status = (apiResponse) => {
        if (apiResponse) {
            return <p>We have a forecast!</p>
        } else {
            return <p>No forecast yet.</p>
        }
    }

    return (
      <div>
        <h2>Weather Display</h2>
        <p>{name}</p>
        <p>{temp}</p>
        <p>{cond}</p>
      </div>
    );
  }
}

export default Display;
