import React, { Component } from 'react';

class TodoInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            inputValue:e.target.value,
        })
    }

    //②　①が押されたときのイベント '新規Todo'をaddTodoに渡す
    handleClick(){
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue);
    }
    render(){
        return(
            <div>
                <input placeholder="新規TODOを入力してください" value={this.state.inputValue} onChange={this.handleChange} />

                { /*①登録押したときのイベント */ }
                <button onClick={this.handleClick}>登録</button>
            </div>
        );
    }
}

class TodoList extends Component {
    render(){
        const list = this.props.tasks.map(todo =>{
            return <TodoItem {...todo} key={todo.id} />;
        });
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

function TodoItem(props){
    return(
        <li>
            {props.title}
        </li>
    );
}

class App extends Component {
        constructor(props){
            super(props);
            this.state ={
                tasks:[
                    { title:'Todo1つ目',id:0},
                    { title:'Todo2つ目',id:1},
                ],
                uniqueId:1,
            };
            this.addTodo = this.addTodo.bind(this);
            this.resetTodo = this.resetTodo.bind(this);
        }

        resetTodo(){
            this.setState({
                tasks:[],
            })
        }

        //'新規Todo'を受け取る
        addTodo(title){
            const {
                tasks,
                uniqueId,
            } = this.state;

            //'新規todo'をpush
            tasks.push({
                title,
                id: uniqueId,
            });

            //'新規todo'をpush
            this.setState({
                tasks,
                uniqueId: uniqueId + 1,
            });
        }

        render(){
        return(
            <div>
                <h1>TODO App</h1>
                <button onClick={this.resetTodo}>りせっと</button>
                <TodoInput addTodo={this.addTodo}/>
                <TodoList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;
