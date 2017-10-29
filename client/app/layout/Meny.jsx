import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Meny = () => {
  return (
      <div className={css(styles.meny)}>
        <a href="https://github.com/kyrrelm" className={css(styles.menyElement)}>
          <img src="../../img/github.svg" alt="" className={css(styles.menyIcon)}/>
          <h1 className={css(styles.h1)}>
            Github
          </h1>
        </a>
        <a href="https://www.linkedin.com/in/kyrre-laugerud-moe" className={css(styles.menyElement)}>
          <img src="../../img/linkedin.svg" alt="" className={css(styles.menyIcon)}/>
          <h1 className={css(styles.h1)}>
            LinkedIn
          </h1>
        </a>
        <a href="https://www.facebook.com/kyrre.l.moe" className={css(styles.menyElement)}>
          <img src="../../img/facebook.svg" alt="" className={css(styles.menyIcon)}/>
          <h1 className={css(styles.h1)}>
            Facebook
          </h1>
        </a>
      </div>
  );
};

const styles = StyleSheet.create({
  meny: {
    marginBottom: '5rem',
    marginRight: '-5rem',
  },
  menyIcon: {
    height: '32px',
    paddingRight: '0.5rem',
    position: 'relative',
    top: '5px',
  },
  menyElement: {
    color: 'inherit',
    textDecoration: 'inherit',
    cursor: 'pointer',
    marginRight: '5rem',
  },
  h1: {
    'font-size': '32px',
    display: 'inline',
    margin: 0,
  },
});

export default Meny;
