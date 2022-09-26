import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <h3>Componente boton</h3>
                <span>Counter que llega desde props {this.props.age}</span>
                <p>Darkmode que llega desde props {this.props.style.toString()}</p>

                <div>
                    <button onClick={() => this.props.incrementCounter(3)}>
                        {" "}
                        Incrementar counter mas 3
                        </button>
                    <button onClick={() => this.props.decrementValue(7)}>
                            {" "}
                            Decrement counter por 7
                        </button>
                </div>
            </div>
        )
    }
}
