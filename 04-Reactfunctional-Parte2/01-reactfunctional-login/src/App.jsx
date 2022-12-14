import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./components/Dashboard"
import LoginForm from './components/LoginForm'

import './App.css'

function App() {
  const [isUserLogged, setisUserLogged] = useState(false);

  return (
    <div className="App">
      <Routes>
        {/* index ???  */}
        <Route index element={<Navigate replace to="/login" />} />
        <Route
          path="/login"
          element={<LoginForm userLogged={(value) => setisUserLogged(value)} />}
        />
        <Route path="/contact" element={<h2>Contactos de mi app ๐</h2>} />
        <Route path="/shopping-cart" element={<h2>Carrito de compras ๐</h2>} />
        <Route path="/payment" element={<h2>Pago ๐ณ</h2>} />

        {/* DEFINIR RUTA 404 QUE TOMA COMO COMODIN*/}
        <Route path="*" element={<h1> Aqui va pรกgina bonita de 404</h1>} />

        {/* <h3>React Login ๐ค</h3>
      <div className="card">
        < LoginForm />
        {!isUserLogged ? (
          <LoginForm userLogged={(value) => setisUserLogged(value)} />
        ) : (
          <Dashboard />
        )}
      </div> */}
      </Routes>
    </div>
  )
}

export default App
