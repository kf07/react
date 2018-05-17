import React, { Component } from 'react';

class MyComponent extends Component {

    constructor() {
        super();
        this.msg = "THIS IS MY COMPONENT!";
    }

    render() {
        return (
            <h1>{this.msg}</h1>
        );
    }

}

export default MyComponent;
