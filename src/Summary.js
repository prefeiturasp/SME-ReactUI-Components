import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

// Rotas
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Rotas from '~/routes';

const ComponentsList = styled.ul`
  display: block;
  padding: 0;
  margin: 0.5rem;

  li {
    display: block;
    padding: 0.5rem;
  }
`;

function Summary({ children }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          width: '20%',
          height: '100%',
          backgroundColor: '#e4e4e4',
          borderRight: '1px solid #d4d4d4',
          boxShadow: '#8080802b 1px 0px 7px 1px',
        }}
      >
        <ComponentsList>
          {Rotas?.map(
            (item) =>
              item.title !== 'Summary' && (
                <li key={shortid.generate()}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              )
          )}
        </ComponentsList>
      </div>
      <div
        style={{
          width: '80%',
          height: '100%',
          overflow: 'scroll',
          position: 'relative',
          padding: '1rem',
        }}
      >
        <div style={{ width: '100%' }}>
          <Switch>
            {Rotas?.map(
              (item) =>
                item.title !== 'Summary' && (
                  <Route key={shortid.generate()} {...item} />
                )
            )}
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Summary;
