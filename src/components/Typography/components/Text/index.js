import React from 'react';
import { bool, oneOfType, oneOf, any } from 'prop-types';

// Styles
import { TextStyleWrapper, TextStyle } from './styles';

function Text({ children, weight, inverted, ...rest }) {
  return (
    <TextStyleWrapper>
      <TextStyle weight={weight} inverted={inverted ? 1 : 0} {...rest}>
        {children}
      </TextStyle>
    </TextStyleWrapper>
  );
}

Text.propTypes = {
  weight: oneOf(['regular', 'bold', 'extrabold']),
  inverted: bool,
};

Text.defaultProps = {
  weight: 'regular',
  inverted: false,
};

export default Text;
