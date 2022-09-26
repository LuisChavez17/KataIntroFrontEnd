import React, { Component } from 'react'

export default class PersonComponentt extends Component {
  componentWillMount = () => {
    console.log("antes del montaje");
  }
  componentDidMount = () => {
    console.log("Despues del montaje");
  }
  render() {
    console.log("Render");
    return <p>YA ERES MAYOR DE EDADD</p>;
  }
}
