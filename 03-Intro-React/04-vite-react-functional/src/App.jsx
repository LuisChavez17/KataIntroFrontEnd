import React, { useState, useEffect } from 'react'
import BadgeComponent from './components/BadgeComponent'
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'
import AxiosComponent from './components/AxiosComponent'
import axios from 'axios'

const App = () => {
  /* Creating a state object called form and setting it to an empty object called setForm. */
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    username: '',
    rol: ''
  })

  const [characters, setCharacters] = useState([])

  const fetchApi = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      const characters = res.data.results
      /* Setting the state of the characters array to the characters array. */
      setCharacters(characters)
    })
  }

  // useEffect (CICLO DE VIDA HOOK)
  useEffect(() => {
    // Se ejecuta cuando se monta y se actualiza (props/state)
    fetchApi()
  });
  
  useEffect(() => {
    return () => {
      // Se ejecuta cuando se desmonta
    }
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="App">
      <NavbarComponent />
      <FormComponent handleChange={handleChange} />
      <BadgeComponent form={form} />
      {
        characters.map((item, index) => {
          return <AxiosComponent item={item} key={`${index}-axios`} />
        })
      }
    </div>
  )
}

export default App



















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
