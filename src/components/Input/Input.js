import React from       'react';
import PropTypes from   'prop-types';
import './Input.scss';

const Input = ({tag: Tag, type, name, maxLength, placeholder, ...props}) => (
    <Tag
      className='Input'
      type={type}
      name={name}
      id={name}
      required
      maxLength={maxLength}
      placeholder={placeholder}
      {...props}
    />
);

Input.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.string,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  tag: 'input',
  name: '',
  maxLength: 200,
  placeholder: '',
}

export default Input;