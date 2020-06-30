import React from 'react';
import t from 'prop-types';

// Styles
import { CardHeadStyle } from '../styles';

function CardHeader({ children, bordered, ...rest }) {
  return (
    <CardHeadStyle bordered={bordered} {...rest}>
      {children}
    </CardHeadStyle>
  );
}

CardHeader.propTypes = {
  bordered: t.bool,
};

CardHeader.defaultProps = {
  bordered: false,
};

export default CardHeader;
