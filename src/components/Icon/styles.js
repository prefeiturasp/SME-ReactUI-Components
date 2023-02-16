import styled from 'styled-components';

export const IconStyle = styled.i`
  ${(props) => 
      `
      color: ${props.theme?.Colors[props.color]};
      font-size: ${props.theme?.IconSize[props.size]};
  `}
`;