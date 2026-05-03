import React from 'react'
import { useState } from 'react'
import './Register.css'

import { useNavigate } from 'react-router-dom'


function Register() {
  const navigate = useNavigate()
   
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[role,setRole]=useState('')
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
   const handleEmailChange=(e)=>{
    setEmail(e.target.value)
   }
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Email:', email)
        console.log('Name:', name)
        console.log('Role:', role)
        if(!email || !name || !password || !role){
            alert('Please fill all fields')
            return
        }
        
    }
    function roleChange(e){
  const value = e.target.value
  setRole(value)
  console.log(value)   
}
  return (
    <div className="register-container">
  <div className="register-card">

    <h2>Register</h2>

    <form onSubmit={handleSubmit}>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={handleEmailChange}
      />

      <input
      type='text'
      placeholder='name'
      value={name}
        onChange={handleNameChange}
     

      />
      <input
      type='password'
      placeholder='password'
      value={password}
        onChange={handlePasswordChange} 
        />
        <select onChange={(e)=> roleChange(e)} value={role} className="select">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

      <button type="submit">Submit</button>

    </form>

  </div>
</div>
  )
}

export default Register
