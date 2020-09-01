import './App.css';
import './index.css';
import React,{useState} from 'react';
import Count from './Count.js';

function Room() {
  const [isLit,setLit]=useState(true);
  let [count,setCount]=useState(0);
  const brightness = isLit ? "lit" : "dark";
  return (<div className={`room ${brightness}`}>
    <h2>The room is {brightness}</h2><br/>
    <button className='button-design' onClick={()=>{setLit(!isLit);setCount(++count);}}>FLIP</button>
    <br/>
    <button onClick={()=>setLit(true)}>Turn ON</button>
    <button onClick={()=>setLit(false)}>Turn OFF</button>
    <Count clickCount={count}></Count>
  </div>);
}

export default Room;
