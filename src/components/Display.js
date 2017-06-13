import React from 'react';

class Display extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {location} = this.props || 'testing';
    // const {temp, rain, clouds} = this.props.forecast;
    const conditions = (apiResponse) => {
        if (apiResponse) {
            return <p>We have a forecast!</p>
        } else {
            return <p>No forecast yet.</p>
        }
    }
    

    return (
      <div>
        <h1>Weather application</h1>
        <p>This is the location {location}</p>
        {conditions()}
      </div>
    );
  }
}

export default Display;
