import React from 'react'
import { childsProps } from '../utils/utils'

export default props => 
  <div>
    <h1>Family</h1>
    {childsProps(props)}
    {/* {React.cloneElement(props.children, {...props })} */}

  </div>