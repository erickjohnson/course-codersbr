import React from 'react'
import Child from './Child'

export default props => {
  const exitNotification = 
    lugar => alert(`Liberado para ${lugar}`)

  return (
    <div>
      <Child exitNotification={exitNotification} />
    </div>
  )
}