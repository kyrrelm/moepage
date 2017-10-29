import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Meny = () => {
  return (
      <div className={css(styles.meny)}>
            <span className={css(styles.menyeElement)}>
              <h1 className={css(styles.h1)}>
                Github
              </h1>
            </span>
        <span className={css(styles.menyeElement)}>
              <h1 className={css(styles.h1)}>
                LinkedIn
              </h1>
            </span>
        <span className={css(styles.menyeElement)}>
              <h1 className={css(styles.h1)}>
                Facebook
              </h1>
            </span>
      </div>
  );
};

const styles = StyleSheet.create({
  meny: {
    marginBottom: '5rem',
    marginRight: '-5rem',
  },
  menyeElement: {
    marginRight: '5rem',
  },
  h1: {
    'font-size': '32px',
    display: 'inline',
    margin: 0,
  },
});

export default Meny;
