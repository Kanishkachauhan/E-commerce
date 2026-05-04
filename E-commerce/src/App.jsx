import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './Pages/Home'
import Cart from './Pages/Cart'


import Login from './Pages/Login'
import Register from './Pages/Register'
import { CartProvider } from './Pages/cartContext'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
      

     

    </BrowserRouter>
    </CartProvider>
  )
}

export default App