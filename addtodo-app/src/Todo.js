import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ text, completed, onClick }) => (
  <li onClick={onClick} style={{textDecoration: completed ? "line-through" : "none", cursor: "pointer"}}>
  {text}
  </li>
)

Todo.PropTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo