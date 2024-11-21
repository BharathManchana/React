import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // In simple terms, hooks are special functions or methods used in programming to allow you to "hook into" or interact with a 
  //certain point in a process or system, often without changing the core functionality.

  let [counter, setCounter] = useState(15) //useState(Deafult value) 

  
  const addValue = ()=>{
    // counter = counter+1;
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)    //Use state send this in batches so in 1 batch it is seen that all are same so it discards
                            //to acheive the same thing we should write it like this
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    
  } 

  const removeValue = ()=>{
    if(counter>0){
    counter = counter-1;
    setCounter(counter)
  }
  else{
    alert('Cant go down then 0')
  } 
}

  return (
    <>
     <h1>React App Hooks</h1>
     <h2>Counter Value:{counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
