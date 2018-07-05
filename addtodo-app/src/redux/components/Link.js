import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ children, active, onClick }) => (
  <button disabled={active} onClick={onClick} style={{marginLeft: '4px'}}>
  {children}
  </button>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link