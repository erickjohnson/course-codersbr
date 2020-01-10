import ReacDOM from 'react-dom'
import React from 'react'
import Counter from './components/Counter'

const elemento = document.getElementById('root')
ReacDOM.render(
  <div>
    <Counter initialNumber={100} />
  </div>
, elemento)