import React from 'react';

// Components
import { Icon, Typography } from '~/components';

export default {
  title: 'Icons',
  component: Icon,
};

export const IconStory = () => (
  <>
    <Icon type="solid" icon="fa-user" /> &nbsp;
    <Icon type="solid" icon="fa-address-book" /> &nbsp;
    <Icon type="solid" icon="fa-calendar" /> &nbsp;
    <Icon type="regular" icon="fa-angry" /> &nbsp;
    <Icon type="brand" icon="fa-apple" /> &nbsp;
  </>
);

IconStory.story = {
  name: 'all',
  decorators: [
    (storyFn) => (
      <div>
        <Typography.Paragraph weight="regular">
          Nossos icones são com base na biblioteca fontawesome free 5.
        </Typography.Paragraph>
        <br />
        <Typography.Paragraph weight="regular">
          Para utilizar, é necessário a busca do tipo e do nome do icone no site
          oficial da biblioteca.
          <br />
          Link para consulta: <br />
          <a
            href="https://fontawesome.com/icons?d=gallery&m=free"
            target="_blank"
          >
            Font Awesome 5 Free
          </a>
        </Typography.Paragraph>
        <br />
        {storyFn()}
      </div>
    ),
  ],
};
