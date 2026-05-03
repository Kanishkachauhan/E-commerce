import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './Pages/Home'


import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>

     

    </BrowserRouter>
  )
}

export default App