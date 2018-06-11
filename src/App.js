import React, {Component} from 'react';
import './style.css';
import img from './img/img01.jpg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {name: '名前1', id: 0, select: 0},
                {name: '名前2', id: 1, select: 0},
                {name: '名前3', id: 2, select: 0},
                {name: '名前4', id: 3, select: 0},
                {name: '名前5', id: 4, select: 0},
                {name: '名前6', id: 5, select: 0},
                {name: '名前7', id: 6, select: 0},
                {name: '名前8', id: 7, select: 0},
                {name: '名前9', id: 8, select: 0},
                {name: '名前10', id: 9, select: 0},
                {name: '名前11', id: 10, select: 0},
                {name: '名前12', id: 11, select: 0},
                {name: '名前13', id: 12, select: 0},
                {name: '名前14', id: 13, select: 0},
                {name: '名前15', id: 14, select: 0},
            ],
            count: 0,
        };
        this.select = this.select.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    select(props){
        const value = (props);
        const count = this.state.count;
        const names_copy = this.state.names.slice();
        const namesLength = names_copy.length;
        if( value === 'yes') {
            names_copy[count].select = '1';
            this.setState({
                names:names_copy
            })
        }
        if( namesLength-1 <= count ) {
            alert('もういないよ');
        } else {
            this.setState({
                count: this.state.count + 1,
            })
        }
    }

    onDelete(props) {
       const deleteNum = (props);
        const names_copy = this.state.names.slice();
        names_copy[deleteNum].select = '0';
       this.setState({
           names:names_copy
       })
    }

    render() {
        return (
            <div className="wrapper">
                <SelectList name={this.state.names[this.state.count]} />
                <SelectBtns select={this.select} />
                <NameList name={this.state.names} onDelete={this.onDelete} />
            </div>
        )
    }
}

class SelectList extends Component {
    render(){
        const NameList = this.props.name;
        return(
            <p className="selectItem"><span>{NameList.name}</span></p>
        )
    }
}

class SelectBtns extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const value = e.target.getAttribute('value');
        this.props.select(value);
    }

    render() {
        return (
            <ul className="selectBtns">
                <li>
                    <button type="btn" onClick={this.handleClick} value="yes">YES</button>
                </li>
                <li>
                    <button type="btn" onClick={this.handleClick} value="no">NO</button>
                </li>
            </ul>
        )
    }
}


class NameList extends Component {
    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        const deleteNum = e.target.getAttribute('data-number');
        if ( window.confirm('けしますか？')) {
            this.props.onDelete(deleteNum);
        }else {

        }
    }

    render() {
        const list = [];
        const lists = this.props.name;
        const listLength = lists.length;
        for (let i = 0; i < listLength; i++) {
            if (lists[i].select === '1') {
                list.push(
                    <li key={i}>{lists[i].name}
                        <button type="button" onClick={this.handleDelete} data-number={i}>けす</button>
                    </li>
                )
            }
        }
        return (
            <ul className="selectList"><img src={img} alt="" />{list}</ul>
        )
    }
}

export default App;
