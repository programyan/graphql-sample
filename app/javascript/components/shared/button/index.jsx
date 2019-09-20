import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Button = (props) => {
  const { primary, warning, text, onClick } = props
  const className = classNames('btn', { ['btn-primary']: primary, ['btn-warning']: warning })

  return(
    <button type="button" className={className} onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  text: 'Кнопка',
  primary: false,
  warning: false,
}
