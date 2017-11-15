import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Meny from './Meny.jsx';
import background from "../../img/blueMountains400.jpeg";
import profilePic from "../../img/winning_cropped.jpg";

export default class Container extends React.Component {
  render() {
    return (
        <div >
          <div className={css(styles.header)}>
            <img className={css(styles.cover)} src={background} alt="" />
            <div className={css(styles.figcaption)}>
              <h1>Kyrre Laugerud Moe</h1>
              <p>developer</p>
            </div>
            <img className={css(styles.profilePic)} src={profilePic} alt="" />
          </div>
          <Meny/>
          <div className={css(styles.content)}>
            {this.props.children}
          </div>
        </div>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    color: '#03006b',
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
    paddingBottom: '5rem',
    marginBottom: '3rem',
  },
  cover: {
    'clip-path': 'polygon(0 0, 100% 0, 100% 95%, 0 80%)',
  },
  profilePic: {
    border: '3px solid white',
    position: 'absolute',
    left: '3rem',
    bottom: 0,
    '@media (max-width: 850px)': {
      visibility: 'hidden',
    },
    width: 'auto',
    height: '200px',
  },
  figcaption: {
    left: '50%',
    position: 'absolute',
    top: '30%',
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


