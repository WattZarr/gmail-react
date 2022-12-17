import React from 'react'
import './style/global.css';
import Nav from './components/Nav';
import Home from './pages/Home'

const App = () => {
  return (
    <div className='py-5'>
        <Nav></Nav>
        <Home></Home>
    </div>
  )
}

export default App