import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const FormField = (props) => {
  const { type, label, name, placeholder, hint } = props
  const [value, setValue] = useState(props.value)
  const onChange = ({ target: { value } }) => setValue(value)

  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input type={type} className="form-control" name={name} placeholder={placeholder} value={value} onChange={onChange}/>
      {hint && <small className="form-text text-muted">{hint}</small>}
    </div>
  )
}

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  hint: PropTypes.string
}

FormField.defaultProps = {
  type: 'text',
  value: ''
}
