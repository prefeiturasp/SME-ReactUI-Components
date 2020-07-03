import React from 'react';
import t from 'prop-types';

// Styles
import { CardFootStyle } from '../styles';

function CardFooter({ children, bordered, ...rest }) {
  return (
    <CardFootStyle bordered={bordered} {...rest}>
      {children}
    </CardFootStyle>
  );
}

CardFooter.propTypes = {
  bordered: t.bool,
};

CardFooter.defaultProps = {
  bordered: false,
};

export default CardFooter;
