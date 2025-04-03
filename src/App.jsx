import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Default from './components/Default'
import Home from './components/Home'
import Letter from './components/Letter'
import Surprise from './components/Surprise'
import Gallery from './components/Gallery'
import Happy from './components/Happy'


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Default />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Letter' element={<Letter />} />
        <Route path='/Surprise' element={<Surprise />} />
        <Route path='/Happy' element={<Happy />} />
      </Routes>
    </>
  )
}

export default App
