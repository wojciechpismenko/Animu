import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

const Input = ({tag: Tag, type, name, label, maxLength, placeholder, ...props}) => (
  <>
    <Tag
      className={styles.Input}
      type={type}
      name={name}
      id={name}
      required
      maxLength={maxLength}
      placeholder={placeholder}
      {...props}
    />
    <label className={styles.Label} htmlFor={name}>
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
  maxLength: 200,
  placeholder: '',
}

export default Input;