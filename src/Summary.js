import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';

// Rotas
import { Switch, Route, Link } from 'react-router-dom';

import Rotas from '~/routes';

const ComponentsList = styled.ul`
  display: block;
  padding: 0;
  margin: 0.2rem;

  li {
    display: block;
    padding: 0.5rem;
    background: #d8d7d7;
    margin-bottom: 3px;

    &:hover {
      background: gray;
      a {
        color: white;
      }
    }

    a {
      color: gray;
      font-weight: bold;
      width: 100%;
      height: inherit;
      display: block;
    }
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
        overflow: 'scroll',
      }}
    >
      <div
        style={{
          width: '20%',
          height: '100%',
          backgroundColor: '#e4e4e4',
          borderRight: '1px solid #d4d4d4',
          boxShadow: '#8080802b 1px 0px 7px 1px',
          overflow: 'scroll',
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
