import React, {Component} from 'react';

class Form extends Component {

    state = {
        location: 'Pittsburgh'
    }

    handleChange = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    handleDefaultSearch = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.location);
        this.setState({
            location: ''
        });
    }

    handleGetUserLocation = (e) => {
        e.preventDefault();
        this.props.onCoordsSearch();
        this.setState({
            location: ''
        });
    }

    render() {
        return (
            <div>
                <div>I'm a Form.</div>
                <form>
                    <input type="text" onChange={this.handleChange} value={this.state.location} />
                    <button onClick={this.handleDefaultSearch}>Get Weather</button>
                    <button onClick={this.handleGetUserLocation}>Find my location</button>
                </form>
            </div>
        );
    }

}

export default Form;