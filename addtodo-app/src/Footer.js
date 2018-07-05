import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link.js'
import { VisibilityFilters } from './const.js'

const Footer = ({ setVisibilityFilter, visibility }) => (
  <div className="filter-area">
    <span>Filter:</span>
    <Link onClick={()=>setVisibilityFilter(VisibilityFilters.SHOW_ALL)} active={visibility===VisibilityFilters.SHOW_ALL}>All</Link>
    <Link onClick={()=>setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)} active={visibility===VisibilityFilters.SHOW_ACTIVE}>Active</Link>
    <Link onClick={()=>setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)} active={visibility===VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
  </div>
)

Footer.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired
}

export default Footer