import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = ({addTodo}) => {
  let input

  return (
    <div className="addtodo-area">
      <form onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim()){
          return;
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input type="text" ref={node => input = node} />
        <button type="submit"></button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo