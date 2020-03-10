import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChatBotLayout from './containers/ChatBotLayout';

const navItems = [
  { name: 'Artikler', url: '/artikler' },
  { name: 'Chat', url: '/app' }
];

const app = () => {
  return (
    <Router>
      <div style={{ height: '100%' }}>
        <Switch>
          <Route path="/" component={ChatBotLayout} />
        </Switch>
      </div>
    </Router>
  );
};

export default app;
