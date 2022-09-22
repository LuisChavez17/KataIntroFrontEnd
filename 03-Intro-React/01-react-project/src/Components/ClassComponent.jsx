import React from 'react';
/** 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
*/

/* The class component is a React component that extends the React.Component class. */
class ClassComponent extends React.Component {
    state = {
        name: 'Estefania',
        rol: '',
        age: 20,
        other: [
            {
                name: 'Estefania',
                rol: 'Frontend',
                age: 20,
            },
            {
                name: 'Carlos',
                rol: 'Frontend',
                age: 25,
            },
        ],
    }
    handleClick = (event) => {
        this.setState({
            ...this.state,
            age: this.state.age + 1 || 0,
            //   rol: event.target.value
        })
    }

    renderJsx = () => {
        return (
            <div>
                <h3>Hola desde una funcion</h3>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            rol: event.target.value
        })
    }

    render() {
        return (
            <div className="app">
                <h2>This is a class component</h2>
                <h3>{this.state.name}</h3>
                <p>
                    Rol:<span>{this.state.rol}</span>
                </p>
                <span>Age: {this.state.age}</span>
                {/* <ul>
                    {this.state.other.map((item, index) => {
                        return (
                            <>
                                <li>{item.name}</li>
                                <li>{item.rol}</li>
                                <li>{item.age}</li>
                            </>
                        )
                    })}
                </ul> */}
                <button onClick={this.handleClick}>Suma</button>
                <button
                    onClick={() => {
                        this.setState({
                            ...this.state,
                            age: this.state.age - 1 || 0,
                        })
                    }}
                >
                    Resta
                </button>

                {
                    this.renderJsx()
                }

                <div>
                    <input type="text" placeholder="escribir" onChange={this.handleChange} />
                    <p>{this.state.rol}</p>
                </div>

            </div>
        )
    }
}

/* Exporting the ClassComponent class. */
export default ClassComponent