import { Component, Fragment, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
// import { Component } from 'react'

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = (type) => {
    if (type === "inc") this.setState({ counter: this.state.counter + 1 });
    else {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      }
    }
  };


  render() {
    return (
      <>
        <h3> React con class component</h3>
        <div className="App">
          <span>
          Ingresa tu edad: <b>{this.state.counter}</b>{" "}
          </span>

          <div className="btn-section">
            <button onClick={() => this.handleClick("inc")}>Incrementar</button>
            <button onClick={() => this.handleClick("dec")}>Decrementar</button>
          </div>
        </div>

        {/* {/* Conditional IF  */}
         {/* if(state.counter > 4) {}  */}
        {this.state.counter > 4 && <p>Ya puedes ir al kinder</p>}
      </>
    );
  }
}


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

export default App
