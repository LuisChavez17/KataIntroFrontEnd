import React, { Component } from 'react'

export default class PersonComponentt extends Component {
  componentWillMount = () => {
    console.log("antes del montaje");
  }
  componentDidMount = () => {
    console.log("Despues del montaje");
  }
  componentWillReceiveProps = (nextProps) => {
    console.log("nextProps", nextProps);
    console.log("se ejecuta inmediatamente despues de que el commponente recibe nuevas propiedades");
  }
  shouldComponentUpdate = (nextProps,nextState) => {
    console.log(nextProps);
    console.log("nextSate", nextState);
    console.log("Se ejecutan antes de empezar a actualizar el componente y cuando llegan las nuevas promps y el nuevo estado");
  }
  componentWillUpdate = (nextProps,nextState) => {
    console.log("Una vez que e metodo should component nos devuelve un booleano true se ejecuta el componen wil update ");
    console.log(nextProps,nextState);
  }
  componentDidUpdate = (prevProp, prevState) => {
    console.log("componentDidUpdate")
    console.log(prevProp)
    console.log(prevState)
  }

  componentWillUnmount = () => {
    console.log("componentWillUnmount")
  }

  render() {
    console.log("Render")
    return <p> YA ERES MAYOR DE EDAD 🍻 {this.props.test}</p>;
  }
}
