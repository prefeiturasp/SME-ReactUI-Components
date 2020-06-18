import styled from 'styled-components';

// Ant
import { Typography } from 'antd';

const Weight = {
  regular: 'Regular',
  bold: 'Bold',
  extrabold: 'ExtraBold',
};

export const TextStyleWrapper = styled(Typography)`
  font-family: 'Roboto', sans-serif;
`;

export const TextStyle = styled(Typography.Text)`
  font-weight: ${(props) =>
    props.theme?.Typography?.FontWeight[Weight[props.weight]]} !important;
  color: ${(props) => (props.inverted ? 'white' : 'black')} !important;
  font-size: ${(props) => props.theme?.Typography?.Size?.XSmall} !important;

  ${(props) =>
    props.inverted &&
    `
    .ant-typography-copy {
			color: white !important;
    }
  `}
`;
