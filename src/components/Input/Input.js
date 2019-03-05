import React from 'react';
import PropTypes from 'prop-types';

const Input = ({tag: Tag, type, name, label, maxLength, placeholder, ...props}) => (
  <>
    <Tag
      type={type}
      name={name}
      id={name}
      required
      maxLength={maxLength}
      placeholder={placeholder}
      {...props}
    />
    <label htmlFor={name}>
      {label}
    </label>
  </>
);

Input.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  tag: 'input',
  name: '',
  label: '',
  maxLength: 100,
  placeholder: '',
}

export default Input;