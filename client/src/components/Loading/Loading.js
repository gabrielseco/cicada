import React from 'react';
import styles from './Loading.scss';

const Loading = ({ pastDelay, error }) => {
  if (pastDelay) {
    return (
      <div className={styles.container}>
        Loading <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    );
  } else if (error) {
    return <div>Sorry, unable to load the page</div>;
  }
  return null;
};

export default Loading;
