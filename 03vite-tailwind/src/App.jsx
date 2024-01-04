import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let newArr=[2,3,4];
  let newObj={
    name:"Nikhil",
    Surname:"Pandey"
  }

  return (
    <>
      <h2 className='bg-green-400 text-black rounded-xzl mb-4'>test vite</h2>
      <Card Username='Nikhil' BtnText='Click me'/>
      <Card Username='Aman' BtnText='Visit me'/>
      {/* <Card Username={newArr}/>
      <Card Username={newObj}/> */}


    </>
  )
}

export default App;
