import { Col, Row } from 'antd';
import React from 'react';

// Components
import { Card, Icon, Button, Typography } from '~/components';

const { Header, Body, Footer } = Card;

export default {
  title: 'Components|Card',
  component: Card,
  subcomponents: { Header, Body, Footer },
};

export const CardStory = () => (
  <Row>
    <Col span={12}>
      <Card rounded animate>
        <Card.Body style={{marginTop: 16, marginBottom: 16}}>
            <div style={{paddingTop: 16}}>
              <Row type='flex' justify='start' style={{marginBottom: 16}}>
                <Icon 
                  color="primary"
                  type="solid" 
                  size="lg" 
                  icon="fa-calendar-alt" 
                />
              </Row>
              <Typography.Title level={4}>
                Enabled
              </Typography.Title>
            </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export const CardDescriptionStory = () => (
  <Row>
    <Col span={12}>
      <Card rounded animate>
        <Card.Body style={{marginTop: 16, marginBottom: 16}}>
            <div style={{paddingTop: 16}}>
              <Row type='flex' justify='start' style={{marginBottom: 16}}>
                <Icon 
                  color="primary"
                  type="solid" 
                  size="lg" 
                  icon="fa-calendar-alt" 
                />
              </Row>
              <Typography.Title level={4}>
                Enabled
              </Typography.Title>
              <Typography.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Typography.Text>
            </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export const CardActionStory = () => (
  <Row>
    <Col span={12}>
      <Card rounded animate>
        <Card.Body>
          <div style={{paddingTop: 16}}>
            <Row type='flex' justify='start' style={{marginBottom: 16}}>
              <Icon 
                color="primary"
                type="solid" 
                size="lg" 
                icon="fa-calendar-alt" 
              />
            </Row>
            <Typography.Title level={4}>
              Enabled
            </Typography.Title>
            <Typography.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </Typography.Text>
          </div>
        </Card.Body>
        <Card.Footer>
          <Row type='flex' justify='end'>
            <Button type="primary" outline style={{marginRight: 5}}>Não</Button>
            <Button type="primary">Sim</Button>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  </Row>
);

export const CardDisabledStory = () => (
  <Row>
    <Col span={12}>
      <Card rounded animate disabled>
        <Card.Body style={{marginTop: 16, marginBottom: 16}}>
            <div style={{paddingTop: 16}}>
              <Row type='flex' justify='start' style={{marginBottom: 16}}>
                <Icon 
                  color="primary"
                  type="solid" 
                  size="lg" 
                  icon="fa-calendar-alt" 
                />
              </Row>
              <Typography.Title level={4}>
                Disabled
              </Typography.Title>
            </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

CardStory.story = {
  name: 'default card',
};

CardDescriptionStory.story = {
  name: 'description card',
};

CardActionStory.story = {
  name: 'action card',
};

CardDisabledStory.story = {
  name: 'disabled card',
};