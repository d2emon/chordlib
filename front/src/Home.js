import React, { Component } from 'react';

class Home extends Component {
    render () {
        console.log(this.props.match);
        return (
            <div className="App">
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
