import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import Main from './components/Main';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { syncHistoryWithStore, push } from 'react-router-redux';
import * as actions from './redux/reducer';

//redux setup
const userObj = {
  name: 'abzzzzzzz',
  password: '123'
};

const store = configureStore();
store.dispatch(actions.createUser(userObj));
store.dispatch(push('/main'))
const history = syncHistoryWithStore(browserHistory, store);

const reactRoot = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Welcome} />
      <Route path="/main" component={Main} />
    </Router>
  </Provider>,
  reactRoot
);
