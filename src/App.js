import React, { useState } from 'react';
import './App.css';
import Messgae from './message.js';

function App() {

  let [count,setCount] = useState(0);
  let [isMorning,setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? 'morning' : ''} `}>
      <h1>React App </h1>
  <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
  <Messgae counter={count}/>
  <button onClick={()=> setMorning(!isMorning)}>{`${isMorning ? 'Click here Change to Night' : 'Click here Change to Day'}`}</button>
  <br/>
  <br/>

  <button onClick={()=> setCount(count +=1)}>Click here tou + value</button>
    </div>
    
  );
}

export default App;
