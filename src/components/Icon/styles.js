import styled from 'styled-components';

export const IconStyle = styled.i`
  ${(props) =>
    props.typeColor === 'primary' &&
    `
    color: ${props.theme?.Colors?.Primary}`}
`;
