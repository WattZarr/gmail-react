import React, { useState } from 'react'
import './style/global.css';
import Nav from './components/Nav';
import Home from './pages/Home'
import Result from './pages/Result';

const App = () => {

  const [change,setChange] = useState(true)

  return (
    <div className='py-5'>
        <Nav change={change} setChange={setChange}></Nav>
        <Home></Home>
    </div>
  )
}

export default App