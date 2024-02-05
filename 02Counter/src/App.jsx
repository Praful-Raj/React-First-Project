import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    //let counter=10;
    let [counter, setCounter]= useState(10)

    const addValue=()=>{
      console.log("Increased "+counter)
      //counter=counter+1;
      setCounter(counter + 1)
    }

    const subsValue=()=>{
      console.log("Decreased "+counter)
      if(counter>0){
        counter-=1
      }
      setCounter(counter)
    }
  return (
    <>
      <h1>Hey there!</h1>
      <h2>Below is the Counter you are looking for!</h2>
      <h1>{counter}</h1>

      <button onClick={addValue}>Increase</button>
      <hr></hr>

      <button onClick={subsValue}>Decrease</button>
    </>
  )
}

export default App
