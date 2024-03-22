import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './components/SignupForm'

function App() {
  const pContents= ["first", "second", "third"]

  return (
    <>
      <div>
        <SignupForm/>
      </div>
    </>
  )
}

export default App
