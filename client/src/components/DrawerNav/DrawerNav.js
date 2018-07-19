// @flow
import React from 'react';
import styles from './DrawerNav.scss';

const DrawerNav = ({ onClick }: { onClick: Function }) => {
  return (
    <button className={styles.drawer} onClick={() => onClick()}>
      Toggle Button
    </button>
  );
};

export default DrawerNav;
