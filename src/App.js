import React, {Component} from 'react';
import logo from './logo.svg';
import testimg from './img/img01.jpg';

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

class NameList extends  Component {
    render(){
        console.log(this.props.names)
        return(
        <div>
            <NameItem names={this.props.names} />
        </div>
        )
    }
}

const Item = ({name,id}) => (
        <li>
            NAME:{name} ID:{id}
            <img src={testimg} alt="" />
        </li>
);

const NameItem = (props) => {
    const test = props.names;
    return (
        <ul>
            <Item name={test[0].name} id={test[0].id} />
            <Item name={test[1].name} id={test[1].id} />
        </ul>
    )
};



export default App;
