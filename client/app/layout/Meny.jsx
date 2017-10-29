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
    paddingLeft: '20rem',
    paddingRight: '2rem',
    left: 0,
    bottom: '7rem',
    position: 'relative',
    display: 'flex',
    '@media (max-width: 850px)': {
      paddingLeft: '2rem',
    },
    '@media (max-width: 570px)': {
      flexDirection: 'column',
      bottom: '10rem',
      marginBottom: '-5rem',
    },

  },
  menyIcon: {
    height: '32px',
    paddingRight: '0.5rem',
    position: 'relative',
    top: '2px',
  },
  menyElement: {
    minWidth: '170px',
    flexBasis: '250px',
    display: 'inline-flex',
    color: 'inherit',
    textDecoration: 'inherit',
    cursor: 'pointer',
    '@media (max-width: 570px)': {
      flexBasis: 'auto',
    },
  },
  h1: {
    'font-size': '32px',
    display: 'inline',
    margin: 0,
  },
});

export default Meny;
