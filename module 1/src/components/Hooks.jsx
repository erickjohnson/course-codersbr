import React, { useState, useEffect } from 'react'

export default props => {
  const [counter, setCounter] = useState(100)
  const [status, setOddEven] = useState('par')
 
  useEffect(() => {
    counter % 2 === 0 ? setOddEven('par') : setOddEven ('impar')
  }, [counter])
  return (
    <div>
      <h1>{counter}</h1>
      <h1>{status}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
    </div>
  )
}