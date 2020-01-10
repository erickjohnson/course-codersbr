import React from 'react'
import Member from './Member'

export default props => 
  <div>
    <Member nome="Ra" sobrenome={props.sobrenome} />
    <Member nome="te" sobrenome={props.sobrenome} />
    <Member nome="sa" sobrenome={props.sobrenome} />
  </div>