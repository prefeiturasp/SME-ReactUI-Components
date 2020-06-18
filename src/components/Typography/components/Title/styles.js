import styled from 'styled-components';

// Ant
import { Typography } from 'antd';

const Weight = {
  regular: 'Regular',
  bold: 'Bold',
  extrabold: 'ExtraBold',
};

export const TitleStyleWrapper = styled(Typography)`
  font-family: 'Roboto', sans-serif;

  h1 {
    font-size: ${(props) => props.theme?.Typography?.Size.XBig};
    font-weight: ${(props) =>
      props.theme?.Typography?.FontWeight[Weight[props.weight]]};
  }

  h2 {
    font-size: ${(props) => props.theme?.Typography?.Size.Big};
    font-weight: ${(props) =>
      props.theme?.Typography?.FontWeight[Weight[props.weight]]};
  }

  h3 {
    font-size: ${(props) => props.theme?.Typography?.Size.Medium};
    font-weight: ${(props) =>
      props.theme?.Typography?.FontWeight[Weight[props.weight]]};
  }
`;

export const TitleStyle = styled(Typography.Title)`
  font-weight: ${(props) =>
    props.theme?.Typography?.FontWeight[Weight[props.weight]]} !important;
  color: ${(props) => (props.inverted ? 'white' : 'black')} !important;

  ${(props) =>
    props.inverted &&
    `
    .ant-typography-copy {
        color: white !important;
    }
  `}
`;
