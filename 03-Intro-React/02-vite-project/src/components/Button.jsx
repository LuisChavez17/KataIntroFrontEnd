import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div>
                <h3>Componente boton</h3>
                <span>Counter que llega desde props {this.props.age}</span>
                <p>Darkmode que llega desde props {this.props.style.toString()}</p>
            </div>
        )
    }
}
