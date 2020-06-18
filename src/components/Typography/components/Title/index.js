import React from 'react';
import { bool, oneOf, oneOfType, any, number } from 'prop-types';

// Styles
import { TitleStyleWrapper, TitleStyle } from './styles';

const Title = ({ children, level, weight, inverted, ...rest }) => (
  <TitleStyleWrapper>
    <TitleStyle
      level={level}
      weight={weight}
      inverted={inverted ? 1 : 0}
      {...rest}
    >
      {children}
    </TitleStyle>
  </TitleStyleWrapper>
);

Title.propTypes = {
  inverted: bool,
  children: oneOfType([any]),
  weight: oneOf(['regular', 'bold', 'extrabold']),
  level: number,
};

Title.defaultProps = {
  inverted: false,
  children: () => null,
  weight: 'regular',
  level: 1,
};

export default Title;
