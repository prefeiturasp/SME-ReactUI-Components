import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

// Components
import { Card, Icon } from '~/components';

// Themes
import Themes from '~/themes';

const IconCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  color: ${(props) => props.theme.primary};
  padding: 1rem 1rem;

  i {
    font-size: 100px;
    margin-bottom: 1rem;
  }
`;

function CardExample() {
  return (
    <div className="App">
      <div style={{ width: '50%' }}>
        <ThemeProvider theme={Themes.temaSIGPAE}>
          <Card animate borderLeft>
            <Card.Header bordered={false}>Título</Card.Header>
            <Card.Body>
              <div>Italo</div>
              <div>Italo</div>
              <div>Italo</div>
              <div>Italo</div>
            </Card.Body>
            <Card.Footer>
              <a href="#">Novo pedido</a>
            </Card.Footer>
          </Card>
        </ThemeProvider>
        <br />
      </div>
      <div style={{ width: '25%' }}>
        <ThemeProvider theme={Themes.temaSGP}>
          <Card animate borderBottom>
            <Card.Body>
              <IconCard>
                <Icon type="solid" icon="fa-calendar-alt" />
                Título
              </IconCard>
            </Card.Body>
          </Card>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default CardExample;
