import React from 'react';
import { Route, Switch} from 'react-router-dom';
import MainPage from './page/MainPage.jsx';

export default class AppLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <Switch>
            <Route path="/" component={MainPage}/>
            {/*<Redirect from="/" to="/setup"/>*/}
          </Switch>
        </div>
      </div>
    );
  }
}
