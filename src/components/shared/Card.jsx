import React from 'react'
import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps = {
    reverse: false
  }
  
Card.propType = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool //boolean
}

export default Card