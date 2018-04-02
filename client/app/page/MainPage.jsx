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
        <Kort title="Kymopedia (Working progress)" url="https://wiki.kyrre.moe">
          Kymopedia is meant to serve as a place where I store and record links to videos, articles, art, locations, ideas, people and other stuff I find useful.
          The content is primarily served from a json file that is part of the git repo that is hosted on github. This is a novel way of managing content, as the json
          file can be edited with ease through githubs web interface. Since the json file is publicly accessible, new content can be fetched trough a simple ajax call to raw.github.com...
          As an added bonus, people that want to contribute with content to the page can do this through a simple pull request on
          <a href="https://github.com/kyrrelm/kymopedia" className={css(styles.a)}> github.</a>
        </Kort>
      </div>
    );
  }
};

const styles = StyleSheet.create({
  air: {
    marginBottom: '3rem',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  },
});
