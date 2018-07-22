// @flow
import React from 'react';
import applyClasses from 'apply-classes';
import styles from './Button.scss';

const Button = ({
  children,
  onClick = () => {},
  type,
  secondary,
  disabled
}: {
  children: any,
  onClick: Function,
  type: string,
  secondary?: boolean,
  disabled?: boolean
}) => {
  const classNames = applyClasses({
    [styles.button]: true,
    [styles.secondaryButton]: secondary
  });
  return (
    <button
      disabled={disabled}
      className={classNames}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
