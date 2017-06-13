import React from 'react';

class Display extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {location} = this.props;
    const {temp, rain, clouds} = this.props.forecast;
    const conditions = if (this.props.forecast) {
      <p>temp</p>
      <p>rain>/p>
      <p>clouds</p>
    } else {
      <p>no forecast yet!</p>
      <p>placeholder</p>
    }

    return (
      <div>
        <h1>Weather application</h1>
        <p>This is the display.</p>
        {conditions}
      </div>
    );
  }
}

export default Display;
