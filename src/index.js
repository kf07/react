import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let inputData = '',
    inputNum,
    results;

const setTextData =(event) => {
    inputData = event.target.value;
    render();
};

const setNumData = (event) => {
    inputNum = event.target.value;
    render();
};

const MyInput =() => (
    <div>
        <input type="text" value={inputData} onChange={setTextData} />
        <input type="text" value={inputNum} onChange={setNumData} />
    </div>
);

const onPlus =() => {
    results = Number(inputData) + Number(inputNum);
    render();
};

const onMinus = () => {
    results =  Number(inputData) - Number(inputNum);
    render();
};

const Calc = () => (
  <Result result = {results} />
);

const Result =({ result }) => (
  <p>りざると：{result}</p>
);

const MyBtn =() => (
    <div>
        <button onClick={onPlus}>たす</button>
        <button onClick={onMinus}>ひく</button>
    </div>
);

const App =() =>(
    <div>
        <MyInput />
        <MyBtn/>
        <Calc />
    </div>
);



const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();
