import React, {Component} from 'react';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {name: '犬1', id: 0,select:0},
                {name: '犬2', id: 1,select:0},
                {name: '犬3', id: 2,select:0},
                {name: '犬4', id: 3,select:0},
                {name: '犬5', id: 4,select:0},
                {name: '犬6', id: 5,select:0},
                {name: '犬7', id: 6,select:0},
                {name: '犬8', id: 7,select:0},
                {name: '犬9', id: 8,select:0},
                {name: '犬10', id: 9,select:0},
                {name: '犬11', id: 10,select:0},
                {name: '犬12', id: 11,select:0},
                {name: '犬13', id: 12,select:0},
                {name: '犬14', id: 13,select:0},
                {name: '犬15', id: 14,select:0},
            ],
        };
        this.selectState = this.selectState.bind(this);
    }
    selectState(props) {
        const names_copy = this.state.names.slice();
        const selectNum = (props);
        names_copy[selectNum].select = '1';
        this.setState({
            names:names_copy
        })
    }

    render() {
        return (
            <div>
                <NameList names={this.state.names} selectState={this.selectState} />
                <SelectedList names={this.state.names} />
            </div>
        );
    }
}

class SelectedList extends Component {
    render(){
        const list = [];
        const lists = this.props.names;
        const listLength = lists.length;
         for(let i=0; i<listLength; i++) {
             console.log(lists[i].select);
             if(lists[i].select == 1) {
                 list.push(
                     <li>{lists[i].name}</li>
                 )
             }
        }
        return(
            <ul>
                {list}
            </ul>
        )
    }
}

class NameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.selectItem = this.selectItem.bind(this);
    }
    selectItem(props){
        this.props.selectState(props);
        let countinc = this.state.count;
        countinc = countinc + 2;
        this.setState({count:countinc})
    }

    render() {
        const list = [];
        let count = this.state.count;
        for (let i = 0; i < 2; i++) {
            list.push(
                <NameItem count={count} name={this.props.names} selectItem={this.selectItem}/>
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

class NameItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        const select = e.target.getAttribute('data-number');
        this.props.selectItem(select);
    }

    render() {
        return(
            <li onClick={this.handleClick} className="select_list_item" data-number={[this.props.count]}><span className="item_text">{this.props.name[this.props.count].name}</span> </li>
        )
    }
}

export default App;
