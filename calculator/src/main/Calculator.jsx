import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button/Button'
import Display from '../components/Display/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class Calculator extends Component {

  state = { ...initialState }
  constructor(props) {
    super(props)
    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }
  clearMemory(){
    this.setState({ ...initialState })
  }
  
  setOperation(operation){
    
    if (this.state.current === 0 ){
      this.setState({
        operation,
        current: 1,
        clearDisplay: true
      })
    } else {
      const equals = operation === '='
      const currentOperation = this.state.operation
      const values = [...this.state.values]
      let resultValue = 0
      switch (currentOperation){
        case '/':
          resultValue = values[0] / values[1]
          break
        
        case '*':
          resultValue = values[0] * values[1]
          break
          
        case '-':
          resultValue = values[0] - values[1]
          break
          
        case '+':
          resultValue = values[0] + values[1]
          break
      }
      
      values[1] = values[0] = 0
      
      this.setState({
        displayValue: parseFloat(resultValue.toFixed(2)),
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }


  
  addDigit(n){
    if (n === '.' && this.state.displayValue.includes('.'))
      return

    const clearDisplay = this.state.displayValue === '0'
      || this.state.clearDisplay
    
      const currentValue = clearDisplay ? '' : this.state.displayValue
      const displayValue = currentValue + n
      this.setState({ displayValue, clearDisplay: false })
    

    if (n !== '.') {
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({ values })
    }
  }
  render(){

    const addDigit = n => this.addDigit(n)
    const setOperation = operation => this.setOperation(operation)
    
    
    return (
      <div>
        <h1>Calculator Exercise</h1>
        <div className="calculator">
          <Display value={this.state.displayValue} />
          <Button triple label="AC" click={this.clearMemory }></Button>
          <Button operation label="/" click={this.setOperation}></Button>
          <Button label="7" click={this.addDigit}></Button>
          <Button label="8" click={this.addDigit}></Button>
          <Button label="9" click={this.addDigit}></Button>
          <Button label="*" click={this.setOperation}></Button>
          <Button label="4" click={this.addDigit}></Button>
          <Button label="5" click={this.addDigit}></Button>
          <Button label="6" click={this.addDigit}></Button>
          <Button operation="true" label="-" click={this.setOperation}></Button>
          <Button label="1" click={this.addDigit}></Button>
          <Button label="2" click={this.addDigit}></Button>
          <Button label="3" click={this.addDigit}></Button>
          <Button operation label="+" click={this.setOperation}></Button>
          <Button double label="0" click={this.addDigit}></Button>
          <Button label="." click={this.addDigit}></Button>
          <Button operation label="=" click={this.setOperation}></Button>
        </div>
      </div>
    )
  }
}
