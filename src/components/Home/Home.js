import React, { useState, useEffect } from 'react'
import './home.css'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Button from 'react-bootstrap/Button'

function Home () {
  const navigate = useNavigate()

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch(error => {
        console.log('error: ' + error)
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        navigate('/')
      }
    })
  }, [])

  return (
    <div className='home'>
      Home
      <Button variant='secondary' onClick={logOut}>
        Sign out
      </Button>
    </div>
  )
}

export default Home
