import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'
import View from './components/View'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/adds' element={<Add />}></Route>
        <Route path='/views' element={<View />}></Route>
        </Routes>
    
    </>
  )
}

export default App
