import React from 'react'

const aprovados = ['Paula','Paula2', 'Paula3', 'Paula4']

export default props => {
  const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>)
  }

  let num = Math.random()

  return (
    <ul>
      {num}
      {gerarItens(aprovados)}
    </ul>
  )
}