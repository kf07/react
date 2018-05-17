import React from 'react';

const Child = (props) => (
    <div onClick={props.handleClick}>
        {props.data}
    </div>
);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 'たける',
            value2: [ 'bar', 'baz' ],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(() => {
            return { value1: 'たかし' };
        });
    }

    render() {
        return (
            <div>
                <Child data={this.state.value1} handleClick={this.handleClick} />
            </div>
        );
    }
}
export default App;