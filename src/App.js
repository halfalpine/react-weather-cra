import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

class App extends Component {

    render() {
        return (
            <div>
                <h1>WEATHER OR NOT</h1>
                <Main />
            </div>
        );
    }  
}

export default App;
