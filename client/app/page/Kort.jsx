import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Kort = ({ title, children, url }) => {
  return (
      <a href={url} className={css(styles.kort)}>
        <h2>
          {title}
        </h2>
        <p>
          {children}
        </p>
      </a>
  );
};

const styles = StyleSheet.create({
  kort: {
    padding: ' 1rem 2rem 1.5rem',
    marginBottom: '2rem',
    backgroundColor: '#4b4b4b',
    display: 'block',
    color: 'inherit',
    textDecoration: 'inherit',
    cursor: 'pointer',
    '@media (max-width: 570px)': {
      padding: '0.1rem 1rem 0.5rem',
    },
  },
});

Kort.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Kort;
