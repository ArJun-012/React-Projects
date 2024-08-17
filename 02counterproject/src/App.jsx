import { useState } from 'react'

import './App.css'


function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5
  
  function addValue(){
    if(counter == 20){
      setCounter(counter = 20)
    }else{
      setCounter(counter+1)
    }
    // console.log(counter);
    // counter = counter+1
    
  }
  const removeValue = () => {
    if(counter >0){
      setCounter(counter-1)   
    }else{
      setCounter(counter = 0)
    }
    
  }

  return (
    <>
      <h1>
        Almec Code
      </h1>
      <h3>Counter value : {counter}</h3>
      <button
      onClick = {addValue}
      >add value</button>
      <button
      onClick = {removeValue}
      >remove value</button>
    </>
  )
}

export default App
