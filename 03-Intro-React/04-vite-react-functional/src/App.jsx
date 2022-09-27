import React, { Component } from 'react'
import BadgeComponent from './components/BadgeComponent'
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'

const App = () => {
  state = {
    form: {
      firstName: "",
      lastName: "",
      username: "",
      jobTitle: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

    return (
      <div className="App">
        <NavbarComponent/>
        <FormComponent handleChange={this.handleChange}/>
        <BadgeComponent
        firstName={this.state.form.firstName} 
        lastName={this.state.form.lastName}
        username={this.state.form.username}
        jobTitle={this.state.form.jobTitle}
        />
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
