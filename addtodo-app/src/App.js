// @flow
import React, { Component } from 'react'
import { VisibilityFilters } from './const.js'
import AddTodo from './AddTodo.js'
import Footer from './Footer.js'
import VisibleTodoList from './VisibleTodoList.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentid: 0,
      todos: [],
      visibility: VisibilityFilters.SHOW_ALL
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this)
  }

  addTodo(text) {
    let { currentid, todos } = this.state
    currentid = currentid + 1
    todos = [
      ...todos,
      {
        id: currentid,
        completed: false,
        text
      }
    ]
    this.setState({
      currentid,
      todos
    })
  }

  toggleTodo(id) {
    let { todos } = this.state
    todos.map(todo => 
      (todo.id === id)
        ? todo.completed = !todo.completed
        : todo
    )
    this.setState({
      todos
    })
  }

  setVisibilityFilter(filter) {
    let visibility = filter
    this.setState({
      visibility
    })
  }

  render() {
    const { todos, visibility } = this.state
    return (
      <div className="container">
        <AddTodo addTodo={this.addTodo} />
        <Footer visibility={visibility} setVisibilityFilter={this.setVisibilityFilter} />
        <VisibleTodoList todos={todos} toggleTodo={this.toggleTodo} filter={visibility}/>
      </div>
    )
  }
}

export default App
