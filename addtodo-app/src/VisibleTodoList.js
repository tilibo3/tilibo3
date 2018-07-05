import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.js'
import { VisibilityFilters } from './const.js'

const VisibleTodoList = ({ todos, toggleTodo, filter }) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      break;
    case VisibilityFilters.SHOW_ACTIVE:
      todos = todos.filter(todo => !todo.completed)
      break;
    case VisibilityFilters.SHOW_COMPLETED:
      todos = todos.filter(todo => todo.completed)
      break;
    default:
      throw new Error('Unknown filter!')
  }

  return (<ul className="list-area">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={()=>toggleTodo(todo.id)} 
      />
    )}
  </ul>)
}

VisibleTodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  filter:PropTypes.string.isRequired
}

export default VisibleTodoList