import React from 'react';
import { Route } from 'react-router-dom';
import './styles.less';
import { HelloWorld } from '../HelloWorld';
import { URLS } from '../../constants';

export const routes = [
  <Route exact path={`${URLS.HOME_PAGE}`} key={URLS.HOME_PAGE} render={props => <HelloWorld {...props} />} />,
  <Route
    path={`${URLS.HELLO_WORLD_PAGE}/:action?/:id?/:tab?`}
    key={URLS.HELLO_WORLD_PAGE}
    render={props => <HelloWorld {...props} />}
  />,
];

export const App: React.FC = () => {
  return <div className="App">{routes.map(route => route)}</div>;
};
