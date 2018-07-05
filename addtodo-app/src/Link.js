import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, onClick, active }) => (
    <button
       onClick={onClick}
       disabled={active}
    >
      {children}
    </button>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

export default Link
