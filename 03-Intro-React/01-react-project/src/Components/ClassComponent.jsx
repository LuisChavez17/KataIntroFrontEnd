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
    }
    handleClick = (event) => {
        this.setState({
            ...this.state,
            age: this.state.age + 1,
            //   rol: event.target.value
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
                <button onClick={this.handleClick}>Suma</button>
            </div>
        )
    }
}

/* Exporting the ClassComponent class. */
export default ClassComponent