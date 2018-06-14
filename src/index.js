import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider,connect } from 'react-redux';
import PropTypes from 'prop-types';

const initialState = {
    value : null,
};

const store = createStore(formReducer,initialState);

const SEND = 'SEND';

function send(value) {
    return {
        type: SEND,
        value,
    };
}


function formReducer(state,action) {
    switch(action.type) {
        case SEND:
            return Object.assign({},state,{
                value:action.value,
            });

        default:
            return state;
    }
}

//View(Container Components)
class FormApp extends Component {
    render(){
        return (
            <div>
                <FormInput handleClick={this.props.onClick} />
                <FormDisplay data={this.props.value} />
            </div>
        );
    }
}

FormApp.propTypes = {
    onClick:PropTypes.func.isRequired,
    value: PropTypes.string,
}

class FormInput extends Component {
    send(e) {
        e.preventDefault();
        this.props.handleClick(this.myInput.value.trim());
        this.myInput.value = '';
    }
    render(){
        return (
            <form>
                <input type="text" ref={(ref)=>(this.myInput=ref)} defaultValue="" />
                <button onClick={(event)=> this.send(event)}>Send</button>
            </form>
        );
    }
}

FormInput.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

class FormDisplay extends Component {
    render(){
        return (
            <div>{this.props.data}</div>
        );
    }
}

FormDisplay.propTypes = {
    data:PropTypes.string,
};


//Storeが状態（state）を持ち、Actionが発生した際に、Reducerを使ってStoreの状態（State）を更新する

function mapStateToProps(state) {
    return {
        value: state.value,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick(value) {
            dispatch(send(value));
        },
    };
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormApp);



ReactDOM.render (
    <Provider store={store} >
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
