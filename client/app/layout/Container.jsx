import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Meny from './Meny.jsx';

export default class Container extends React.Component {
  render() {
    return (
        <div >
          <div className={css(styles.header)}>
            <img className={css(styles.cover)} src="../../img/blueMountains400.jpeg" alt="" />
            <div className={css(styles.figcaption)}>
              <h1>Kyrre Laugerud Moe</h1>
              <p>utvikler</p>
            </div>
            <div className={css(styles.profile)}>
              <img className={css(styles.profilePic)} src="../../img/winning_cropped.jpg" alt="" />
            </div>
          </div>
          <div className={css(styles.content)}>
            <Meny/>
            {this.props.children}
          </div>
        </div>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    color: '#fff',
    overflowX: 'hidden',
    position: 'relative',
    textAlign: 'center',
    textShadow: '0px 0px 1px rgba(0,0,0,0.5)',
    h1: {
      'font-size': '32px',
    },
    p: {
      'font-size': '14px',
      'font-weight': '300',
      'margin-top': '0.5em',
    },
    marginBottom: '1rem',
  },
  cover: {
    'clip-path': 'polygon(0 0, 100% 0, 100% 90%, 0 75%)',
  },
  profile: {
    border: '3px solid white',
    position: 'absolute',
    left: '3rem',
    bottom: 0,
    '@media (max-width: 750px)': {
      visibility: 'hidden',
    },
  },
  profilePic: {
    width: 'auto',
    height: '200px',
  },
  figcaption: {
    left: '50%',
    position: 'absolute',
    top: '40%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  content: {
    margin: '0 20rem 2rem',
    '@media (max-width: 1400px)': {
      marginLeft: '10rem',
      marginRight: '10rem',
    },
    '@media (max-width: 900px)': {
      marginLeft: '2rem',
      marginRight: '2rem',
    }
  },
});


