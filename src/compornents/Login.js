import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, proveider } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate()
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, proveider).then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login
