import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'

export const Login = () => {
    const signIn = () => {
        signInWithPopup(auth, provider);
    }
  return (
    <div>
        <button onClick={signIn}>Sign in with google</button>
    </div>
  )
}
