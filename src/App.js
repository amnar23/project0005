import './App.css';
import './index.css';
import React,{useState} from 'react';

function Room() {
  const [isLit,setLit]=useState(true);
  const [count,setCount]=useState(0);
  const brightness = isLit ? "lit" : "dark";
  return <div className={`room ${brightness}`}>
    <h2>The room is {brightness}</h2><br/>
    <button className='button-design' onClick={()=>{setLit(!isLit);setCount(count+1);}}>FLIP</button>
    <p>Button is clicked {count} times</p>
  </div>
}

export default Room;
