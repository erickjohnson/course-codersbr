import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'
export default class Todo extends Component {
  constructor (props){
    super(props)

    this.state = {description: '', list: [] }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.refresh()
  }

  refresh(description = ''){
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then( resp => this.setState({ ...this.state, description, list: resp.data }))
  }

  handleAdd(){
    const description = this.state.description
    axios.post(URL, { description })
      .then(resp => { this.refresh( this.state.description ) })
  }

  handleChange(e){
    this.setState({ ...this.state, description: e.target.value })
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
  }

  handleCheck(todo) {
    if(todo.done){
      axios({
        method: 'put',
        url: `${URL}/${todo._id}`,
        data: {
          done: false
        }
      })
      .then(resp => { this.refresh(); console.log(this.state.list.done) })
    } else {
      axios({
        method: 'put',
        url: `${URL}/${todo._id}`,
        data: {
          done: true
        }
      })
      .then(resp => {this.refresh();  console.log(this.state) })
    }
  }

  handleSearch(){
    this.refresh( this.state.description )
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='cadastro' />
        <TodoForm description={this.state.description}
          handleAdd={this.handleAdd} 
          handleChange={this.handleChange}
          handleSearch={this.handleSearch} />
        <TodoList list={this.state.list}
          handleCheck={this.handleCheck} 
          handleRemove={this.handleRemove} />
      </div>
    )
  }
}
