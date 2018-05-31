import React, {Component} from 'react';
import './App.css';

let textData ='';
const setTextData = (event) => {
  textData = event.target.value;
};

const MyBox = () => (
    <div>
        <input type="text" value={textData} onChange={setTextData} />
    </div>
);

const MyButton =() => (
  <div>
      <button onClick={()=>alert('clicked')}>Click Me</button>
  </div>
);

const App =() =>(
    <div>
        <MyButton/>
        <MyBox />
    </div>
);


export default App;
