import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Display from './components/Display';
import weatherUnderground from './api/openWeatherMap';

class App extends Component {

    handleSearch(location) {
        console.log(location);
        weatherUnderground(location);
    }

    handleCoordsSearch(xCoord, yCoord) {
        console.log(xCoord, yCoord);
    }

    render() {
        return (
            <div>
                <h1>WEATHER OR NOT</h1>
                <Form onSearch={this.handleSearch} onCoordsSearch={this.handleCoordsSearch} />
                <Display />
            </div>
        );
    }  
}

export default App;
