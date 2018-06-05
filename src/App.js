import React, {Component} from 'react';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {name: '犬1', id: 0},
                {name: '犬2', id: 1},
                {name: '犬3', id: 2},
                {name: '犬4', id: 3},
                {name: '犬5', id: 4},
                {name: '犬6', id: 5},
                {name: '犬7', id: 6},
                {name: '犬8', id: 7},
                {name: '犬9', id: 8},
                {name: '犬10', id: 9},
                {name: '犬11', id: 10},
                {name: '犬12', id: 11},
                {name: '犬13', id: 12},
                {name: '犬14', id: 13},
                {name: '犬15', id: 14},
            ],
        }
    }
    alertEvent(){
        alert('aaa')
    }

    render() {
        return (
            <div>
                <NameList names={this.state.names} handleClick={this.handleClick} />
            </div>
        );
    }
}

class NameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
            console.log('aaa')
    }

    render() {
        const list = [];
        let count = this.state.count;
        for (let i = 0; i < 2; i++) {
            list.push(
                <NameItem count={count} name={this.props.names} handleClick={this.handleClick} />
            );
            count++;
        }
        return (
            <ul className="select_list">
                {list}
            </ul>
        )
    }
}

// const NameItem = (props) => (
//     <li onClick={props.handleClick} className="select_list_item"><span className="item_text">{props.name[props.count].name}</span> </li>
// );

class NameItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectItem : '',
        };
    }
    //
    // handleClick(e){
    //     const select = e.target.getAttribute('data-number');
    //     console.log(select)
    // }

    render() {
        return(
            <li onClick={this.props.handleClick} className="select_list_item" data-number={[this.props.count]}><span className="item_text">{this.props.name[this.props.count].name}</span> </li>
        )
    }
}

export default App;
