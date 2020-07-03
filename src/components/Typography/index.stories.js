import React from 'react';
import t from 'prop-types';

// Components
import { Typography } from '~/components';

const { Title, Paragraph, Text } = Typography;

export default {
  title: 'Typography',
  component: Title,
  subcomponents: { Paragraph, Text },
};

export const TitleStory = () => (
  <>
    <Title level={1}>h1. Título</Title>
    <Title level={2}>h2. Título</Title>
    <Title level={3}>h3. Título</Title>
    <Title level={4}>h4. Título</Title>
  </>
);

export const TitleBoldStory = () => (
  <>
    <Title level={1} weight="extrabold">
      h1. Título
    </Title>
    <Title level={2} weight="extrabold">
      h2. Título
    </Title>
    <Title level={3} weight="extrabold">
      h3. Título
    </Title>
    <Title level={4} weight="extrabold">
      h4. Título
    </Title>
  </>
);

export const TitleInvertedBoldStory = () => (
  <>
    <Title level={1} weight="extrabold" inverted>
      h1. Título
    </Title>
    <Title level={2} weight="extrabold" inverted>
      h2. Título
    </Title>
    <Title level={3} weight="extrabold" inverted>
      h3. Título
    </Title>
    <Title level={4} weight="extrabold" inverted>
      h4. Título
    </Title>
  </>
);

export const ParagraphStory = () => {
  return (
    <Paragraph>
      Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
      santis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
      Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris
      que eu tomo, mas ninguém vê os tombis que eu levo!
    </Paragraph>
  );
};

export const ParagraphBoldStory = () => {
  return (
    <Paragraph weight="bold">
      Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
      santis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
      Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris
      que eu tomo, mas ninguém vê os tombis que eu levo!
    </Paragraph>
  );
};

export const TextStory = () => {
  return (
    <Text>
      Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
      santis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
      Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris
      que eu tomo, mas ninguém vê os tombis que eu levo!
    </Text>
  );
};

export const TextBoldStory = () => {
  return (
    <Text weight="extrabold">
      Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis
      santis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
      Aenean aliquam molestie leo, vitae iaculis nisl. Todo mundo vê os porris
      que eu tomo, mas ninguém vê os tombis que eu levo!
    </Text>
  );
};

TitleStory.story = {
  name: 'default titles',
};

TitleBoldStory.story = {
  name: 'bolder titles',
};

TitleInvertedBoldStory.story = {
  name: 'inverted titles',
  decorators: [
    (storyFn) => (
      <div style={{ backgroundColor: '#333', padding: '1rem' }}>
        {storyFn()}
      </div>
    ),
  ],
};

ParagraphStory.story = {
  name: 'default paragraph',
};

ParagraphBoldStory.story = {
  name: 'paragraph bold',
};

TextStory.story = {
  name: 'default text',
};

TextBoldStory.story = {
  name: 'extra bold text',
};
