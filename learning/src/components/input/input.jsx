import React from "react";
import styles from './input.module.css';

function Input(props) {

  return (
    <label className={styles.label}>
      {props.label}
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
      />
    </label>
  );
}

export default Input;
