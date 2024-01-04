import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
      
      let [counter , setCounter] = useState(0)
      const addValue = () => {
        counter=counter+1;
        setCounter (counter);
        console.log("Added",counter);
      }

      const removeValue = () =>{
        counter=counter-1;
        setCounter (counter) ;
        console.log("Decreased",counter);
      }
      
  return (
    <>
      <div>
        <h1>Jai Shree Ram</h1>
        <br/>
        <h3>What you want do with counter do it ...</h3><br/>
        <button onClick={addValue}>Add value</button><br/>
        <h3>Counter :- {counter}</h3><br/>
        <button onClick={removeValue}>decrease value</button>
      </div>
      
    </>
  )
}

export default App
