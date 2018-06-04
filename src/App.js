import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {name: 'てすと1', id: 0},
                {name: 'てすと2', id: 1},
                {name: 'てすと3', id: 2},
                {name: 'てすと4', id: 3},
                {name: 'てすと5', id: 4},
                {name: 'てすと6', id: 5},
            ],
        }
    }

    render() {
        return (
            <div>
                <NameList names={this.state.names}/>
            </div>
        );
    }
}

class NameList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('ok')
    }


    render() {
        return (
            <ul>
                <NameItem name={this.props.names} handleClick={this.handleClick} />
            </ul>
        )
    }
}

const NameItem = (props) => (
    <li onClick={props.handleClick}>あああ{props.name[0].name}</li>
);


export default App;
