import styled from 'styled-components';

export const IconStyle = styled.i`
  ${(props) => `
      color: ${props.theme?.Icon?.colors[props.color]};
      font-size: ${props.theme?.Icon?.sizes[props.size]};
  `}
`;