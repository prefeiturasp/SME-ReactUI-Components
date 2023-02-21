import React from 'react';

// Components
import { Icon, Typography } from '~/components';

export default {
  title: 'Components|Icons',
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

export const IconSizesStory = () => (
  <>
    <Icon type="solid" size='xxs' icon="fa-user"/> &nbsp;
    <Icon type="solid" size='xs' icon="fa-user"/> &nbsp;
    <Icon type="solid" size='sm' icon="fa-address-book" /> &nbsp;
    <Icon type="solid" size='md' icon="fa-calendar" /> &nbsp;
    <Icon type="regular" size='lg' icon="fa-angry" /> &nbsp;
  </>
);

export const IconColorsStory = () => (
  <>
    <Icon type="solid" size='md' icon="fa-user" color="primary"/> &nbsp;
    <Icon type="solid" size='md' icon="fa-phone" color="secondary" /> &nbsp;
    <Icon type="solid" size='md' icon="fa-bell" color="tertiary" /> &nbsp;
    <Icon type="solid" size='md' icon="fa-address-book" color="success" /> &nbsp;
    <Icon type="solid" size='md' icon="fa-calendar" color="error" /> &nbsp;
    <Icon type="solid" size='md' icon="fa-star" color="info" /> &nbsp;
    <Icon type="solid" size='md' icon="fa-fire" color="warning" /> &nbsp;
  </>
);

export const IconTypesStory = () => (
  <>
    <Icon type="solid" icon="fa-user"/> &nbsp;
    <Icon type="brand" icon="fa-facebook" /> &nbsp;
    <Icon type="regular" icon="fa-angry" /> &nbsp;
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


IconSizesStory.story = {
  name: 'sizes'
};

IconColorsStory.story = {
  name: 'colors'
}

IconTypesStory.story = {
  name: 'types'
}