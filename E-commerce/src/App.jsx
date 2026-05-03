import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Headers from './components/Header'

import Login from './Pages/Login'
import Register from './Pages/Register'





function App() {
  return (
   
    <BrowserRouter>

      <Headers />

      <Routes>
        
         
    
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
      </Routes>

      <Footer />

    </BrowserRouter>
   
  )
}

export default App