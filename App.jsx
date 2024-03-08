import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =useState(5)
  // let counter = 5;
  const addvalue =()=>{
    console.log("add",counter);
    counter = counter+1;
    // setCounter(counter)
    if(counter<=20){
      setCounter(counter)
    }else{
      alert("counter value is less than or equal 20")
    
    }
    console.log("after adding",counter);
  }
  const removevalue =()=>{
    console.log("before remove the data", counter);
    counter = counter-1;
    if(counter>=0){
      setCounter(counter);
    }else{
      alert("counter value is less than or equal 0")
    }
    
    console.log("after remove the data", counter);
  }
  return (
    <>
     <h1>Counter</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addvalue}>add value{counter}</button>
     <br/>
     <button onClick={removevalue}>remove value{counter}</button>
     <p>Footer:{counter}</p>
    </>
  )
}

export default App
