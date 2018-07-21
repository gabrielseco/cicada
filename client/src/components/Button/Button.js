// @flow
import React from 'react';
import styles from './Button.scss';

const Button = ({
  children,
  onClick = () => {},
  type
}: {
  children: any,
  onClick: Function,
  type: string
}) => (
  <button className={styles.button} type={type} onClick={() => onClick()}>
    {children}
  </button>
);

export default Button;
