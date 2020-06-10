import React from 'react';
import shortid from 'shortid';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Rotas from '~/routes';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {Rotas?.map(
            (item) =>
              item?.title === 'Summary' && (
                <Route key={shortid.generate()} {...item} />
              )
          )}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
