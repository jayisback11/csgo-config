import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import './login.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function Login () {
  const navigate = useNavigate()

  const [userLoginInfo, setUserLoginInfo] = useState({
    email: '',
    password: ''
  })

  const setEmail = e => {
    setUserLoginInfo(info => ({
      ...info,
      email: e.target.value
    }))
  }

  const setPassword = e => {
    setUserLoginInfo(info => ({
      ...info,
      password: e.target.value
    }))
  }

  const customDebugger = () => {
    console.log(userLoginInfo)
  }

  const login = () => {
    signInWithEmailAndPassword(
      auth,
      userLoginInfo.email,
      userLoginInfo.password
    )
      .then(userCredential => {
        navigate('/home')
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        navigate('/home')
      }
    })
  }, [])

  return (
    <div className='login'>
      <div className='login-container'>
        <h1>Login</h1>
        <FloatingLabel
          controlId='floatingInput'
          label='Email address'
          className='mb-3'
        >
          <Form.Control
            type='email'
            placeholder='name@example.com'
            onChange={setEmail}
          />
        </FloatingLabel>
        <FloatingLabel controlId='floatingPassword' label='Password'>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={setPassword}
          />
        </FloatingLabel>
        <Button variant='primary' onClick={customDebugger}>
          console log info
        </Button>
        <Button variant='secondary' onClick={login}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
