import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <div className="App">
      <h3>React Login 👤</h3>
      <div className="card">
        < LoginForm />
      </div>
    </div>
  )
}

export default App
