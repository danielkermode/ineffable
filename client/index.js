import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { syncHistoryWithStore } from 'react-router-redux';
import * as actions from './redux/reducer';

//redux setup
const userObj = {
    name: 'abghjg',
    password: '123'
  }
const store = configureStore();
store.dispatch(actions.createUser(userObj));

const history = syncHistoryWithStore(browserHistory, store);

const reactRoot = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Welcome} />

    </Router>
  </Provider>,
  reactRoot
);

      // <Route path="/profiles/:id" component={Profile} />
