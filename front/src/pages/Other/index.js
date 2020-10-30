import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PagesListRoute from './PagesListRoute';
import WikiPageRoute from './WikiPageRoute';

const Other = () => (
  <Switch>
    <Route exact path="/list-pages" component={PagesListRoute} />
    <Route path="/:page.md" component={WikiPageRoute} />
  </Switch>
);

export default Other;
