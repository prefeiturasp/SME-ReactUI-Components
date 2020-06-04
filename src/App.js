import React from 'react';
import shortid from 'shortid';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Rotas from '~/routes';

function App() {
  return (
    <Router>
      <Switch>
        {Rotas?.map((item) => (
          <Route key={shortid.generate()} {...item} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
