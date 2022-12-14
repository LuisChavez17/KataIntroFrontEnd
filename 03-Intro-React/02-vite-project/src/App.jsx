import { Component, Fragment, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import ChildComponent from './components/ChildComponent';
import Button from './components/Button';
import TeenagerComponent from './components/TeenagerComponent';
import PersonComponentt from './components/PersonComponentt';
// import { Component } from 'react'

class App extends Component {
  state = {
    counter: 0,
    darkMode: false,
    team: "Dev.f"
  };

  handleClick = (type) => {
    if (type === "inc") {
      if (this.state.counter < 30) {
        this.setState({ counter: this.state.counter + 1 })
      }
    } else {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      }
    }
  };


  render() {
    const stylesDiv2 = {
      fontSize: 25, 
      color: "yellow"
    }
    return (
      <>
        <h3
          style={!this.state.darkMode ? { color: "white" } : { color: "red" }}
        >
          React con class component</h3>
        <div className="App">
          <div style={{ fontSize: 25, color: "yellow" }}> style={stylesDiv2}
            {/* Objeto */}
            Ingresa tu edad: <b>{this.state.counter}</b>{" "}
          </div>

          <div className="btn-section">
            <button onClick={() => this.handleClick("inc")}>Incrementar</button>
            <button onClick={() => this.handleClick("dec")}>Decrementar</button>
          </div>
        </div>

        {/* Conditional IF  */}
        {/* if(state.counter > 4) {}  */}
        {this.state.counter > 4 && <p>Ya puedes ir al kinder</p>}

        {/* CONDITIONAL IF ELSE  */}
        {/* condicion ? verdadero : false  */}
        {this.state.counter > 12 ? (
          <>
            <h4> Ya pasas a secundaria</h4>
          </>
        ) : (
          <h5> Estas pequeño</h5>
        )}

        {/* EJERCICIO 
          MOSTRAR EL SIG MENSAJE CUANDO SEAS MAYOR DE EDAD (>+ 18) YA ERES MAYOR DE EDAD
          MOSTRAR EL SIG MENSAJE CUANDO TENGAS ENTRE 18 Y 12 AñOS O MAS  ERES UN ADOLESCENTE
          MOSTRAR EL SIG MENSAJE CUANDO TENGAS MENOS 12 Años  ERES UN NIñO
          USAR CONDITIONAL RENDERING : )
        */}

        {this.state.counter >= 18 ? (
          <PersonComponentt test={true}/>
        ) : this.state.counter < 18 && this.state.counter >= 12 ? (
          <TeenagerComponent />
        ) : (
          <>
            <ChildComponent />
            {/* propHtml = valor */}
            {/* propCualquierNombre = 'hola' || state */}
          </>
          )}
          <Button age={this.state.counter}
              style={this.state.darkMode}
              incrementCounter={(value) => {
                if (this.state.counter <= 25){
                this.setstate({counter: this.state.counter + value})
                // console.log(`valor de incremento ${value}`)
              }
            }}
              decrementValue={(decvalue) => {
                if (this.state.counter >= 7) {
                  this.setState({
                    counter: this.state.counter - decvalue,
                  });
                }
              }
            }
            />
        {/*  IF ELSE IF ELSE */}
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
