import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Container from './Container.jsx';
import MainPage from './page/MainPage.jsx';

export default class AppLayout extends React.Component {
  render() {
    return (
     <Container>
      <Switch>
        <Route path="/" component={MainPage}/>
        {/*<Redirect from="/" to="/setup"/>*/}
      </Switch>
     </Container>
    );
  }
}
