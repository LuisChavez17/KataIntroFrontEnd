import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'

function App() {
  const [isUserLogged, setisUserLogged] = useState(false);

  return (
    <div className="App">
      <h3>React Login 👤</h3>
      <div className="card">
        < LoginForm />
        {!isUserLogged ? (
          <LoginForm userLogged={(value) => setisUserLogged(value)} />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  )
}

export default App
