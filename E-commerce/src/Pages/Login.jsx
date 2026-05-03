import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate = useNavigate()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

   const handleSubmit = (e) => {
  e.preventDefault()

  if (!email || !password || !role) {
    alert('Please fill all fields')
    return
  }

  const userData = {
    email,
    password,
    role
  }

  localStorage.setItem('user', JSON.stringify(userData))

  console.log('Saved in localStorage')

  
  
}
    
     function roleChange(e){
  const value = e.target.value
  setRole(value)
  console.log(value)   
     }



  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <select onChange={(e)=> roleChange(e)} value={role} className="select">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>


          <button type="submit" onClick={handleSubmit}>Submit</button>

        </form>

        
        <p className="register-text">
          Don't have an account? 
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  )
}

export default Login