import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
  <div> 
    <div>{props.counter.number }</div>
    <input onChange={props.stepChanged}
      value={props.counter.step} type='number' />
    <button onClick={props.inc} > INC </button>
    <button onClick={props.dec} > DEC </button>
  </div>
)

const mapStateToPrps = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

export default connect(mapStateToPrps, mapDispatchToProps)(Counter)