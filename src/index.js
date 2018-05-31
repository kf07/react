import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const items = [
    { name: 'aaa', color: 'black' },
    { name: 'bbb', color: 'green' },
    { name: 'ccc', color: 'pink' },
    { name: 'ddd', color: 'yellow' },
];

let nameData = '',
    colorData = '';
const setNameData = (event) => {
    nameData = event.target.value;
    render();
};

const setColorData = (event) => {
  colorData =event.target.value;
  render();
};

const addData = () => {
    items.push({ name: nameData, color: colorData });
    nameData = '';
    render();
};
const MyForm = () => (
    <div>
        <input type="text" value={nameData} onChange={setNameData} />
        <input type="text" value={colorData} onChange={setColorData} />
        <button onClick={addData}>Add Data</button>
    </div>
);

const Hello2 = ({ name, color,onDelete,onCor }) => (
    <div>
        <p>
            <span style={{ color }}>Hello {name}!</span>
            <button onClick={() => onDelete()}>Delete</button>
            <button onClick={() => onCor()}>修正</button>
        </p>
    </div>
);

const deleteItem = (index) => {
    if(window.confirm('削除しますか？')) {
        items.splice(index, 1);
    }else {
        window.alert('キャンセルしました');
    }
    render();
};

const corItem = (index) => {
    items.splice(index,1,{ name: nameData, color: colorData });
    nameData = '';
    render();
};

const App = () => (
    <div>
        <MyForm />
        {items.map((item,index) => (
            <Hello2 name={item.name} color={item.color} onDelete={() => deleteItem(index)} onCor={()=>corItem(index)} />
        ))}
    </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();