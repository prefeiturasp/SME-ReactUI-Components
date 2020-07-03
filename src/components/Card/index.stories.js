import React from 'react';
import styled from 'styled-components';

// Components
import { Card, Icon } from '~/components';

const { Header, Body, Footer } = Card;

export default {
  title: 'Components|Card',
  component: Card,
  subcomponents: { Header, Body, Footer },
};

const IconCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  color: ${(props) => props.theme?.Colors?.Primary};
  padding: 1rem 1rem;

  i {
    font-size: 100px;
    margin-bottom: 1rem;
  }
`;

export const CardStory = () => (
  <Card rounded animate>
    <Card.Header bordered={false}>Título</Card.Header>
    <Card.Body>
      <div>Conteúdo</div>
      <div>Conteúdo</div>
      <div>Conteúdo</div>
      <div>Conteúdo</div>
    </Card.Body>
    <Card.Footer>
      <a href="#">Novo pedido</a>
    </Card.Footer>
  </Card>
);

export const CardBorderLeftStory = () => (
  <Card rounded animate borderLeft>
    <Card.Header bordered={false}>Título</Card.Header>
    <Card.Body>
      <div>Conteúdo</div>
      <div>Conteúdo</div>
      <div>Conteúdo</div>
      <div>Conteúdo</div>
    </Card.Body>
    <Card.Footer>
      <a href="#">Novo pedido</a>
    </Card.Footer>
  </Card>
);

export const CardBorderBottomStory = () => (
  <Card rounded animate borderBottom>
    <Card.Body>
      <IconCard>
        <Icon type="solid" icon="fa-calendar-alt" />
        Título
      </IconCard>
    </Card.Body>
  </Card>
);

CardStory.story = {
  name: 'default card',
};

CardBorderLeftStory.story = {
  name: 'border left card',
};

CardBorderBottomStory.story = {
  name: 'border bottom card',
};
