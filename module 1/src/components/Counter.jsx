import React from 'react'

export default class Counter extends React.Component {
  state = {
    number: this.props.initialNumber
  }

  plusOne = () => {
    this.changeNumber(1) 
  }
  minusOne = () => {
    this.changeNumber(-1) 
  }
  
  changeNumber = (numberToDif) => {
    this.setState({
      number: this.state.number + numberToDif
    })
  }
  render(){

    return (
      <div>
        <div>Numero: {this.state.number}</div>
        <button onClick={this.plusOne}>Inc</button>
        <button onClick={this.minusOne}>Dec</button>
        <button onClick={() => this.changeNumber(10)}>Inc10</button>
        <button onClick={() => this.changeNumber(-10)}>Dec10</button>
      </div>
    )
  }
}


//correção undefined por não apontar o this para o Counter
//Solução 01 - construtor bindado
// constructor(props) {
//   super(props)
//   this.plusOne = this.plusOne.bind(this)
// }

// Solução 02 - arrow function no click
// <button onClick={() => this.plusOne()}>Inc</[

// Soluçao 03 - arrow function na soma
// plusOne = () => {
//   return this.props.number++
// }