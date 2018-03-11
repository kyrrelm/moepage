import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Kort from './Kort.jsx';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className={css(styles.air)}>
          Hobby Projects
        </h1>
        <Kort title="Hodl" url="https://hodl.kyrre.moe">
          Hodle is a cryptocurrency portfolio app letting you keep track of your crypto investments and portfolio worth.
          It is a responsive web app featuring login and constantly updating prices, written in elm.

        </Kort>
        <Kort title="NextDep" url="http://nextdep.kyrre.moe">
          NextDep is a simple web app for displaying the next departures at a public transit point.
          It is currently only optimized for the metro, but should work for all transit points served by the ruter api.
        </Kort>
      </div>
    );
  }
};

const styles = StyleSheet.create({
  air: {
    marginBottom: '3rem',
  },
});
