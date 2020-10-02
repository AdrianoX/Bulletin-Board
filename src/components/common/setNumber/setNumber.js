import React from 'react';
import styles from './setNumber.module.scss';
import PropTypes from 'prop-types';


const Component = ({ state, variant }) => (


  <input
    // type = "string"
    type= "number"
    min= "1"
    max= "20"
    state = {state}
    variant = {variant}
    className={styles.input}
  />

);

Component.propTypes = {
  state: PropTypes.number,
  variant: PropTypes.func,
  // className: PropTypes.node,
};

export {
  Component as SetNumber,
  Component as SetNumberComponent,
};
