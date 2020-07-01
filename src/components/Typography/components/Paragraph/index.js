import React from 'react';
import { bool, oneOfType, oneOf, any } from 'prop-types';

// Styles
import { ParagraphStyleWrapper, ParagraphStyle } from './styles';

function Paragraph({ children, weight, inverted, ...rest }) {
  return (
    <ParagraphStyleWrapper>
      <ParagraphStyle weight={weight} inverted={inverted ? 1 : 0} {...rest}>
        {children}
      </ParagraphStyle>
    </ParagraphStyleWrapper>
  );
}

Paragraph.propTypes = {
  weight: oneOf(['regular', 'bold', 'extrabold']),
  inverted: bool,
};

Paragraph.defaultProps = {
  weight: 'regular',
  inverted: false,
};

export default Paragraph;
