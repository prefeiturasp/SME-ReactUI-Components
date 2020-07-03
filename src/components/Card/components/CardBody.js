import React from 'react';
import t from 'prop-types';

// Styles
import { CardBodyStyle } from '../styles';

function CardBody({ children, bordered, ...rest }) {
  return (
    <CardBodyStyle bordered={bordered} {...rest}>
      {children}
    </CardBodyStyle>
  );
}

CardBody.propTypes = {
  bordered: t.bool,
};

CardBody.defaultProps = {
  bordered: false,
};

export default CardBody;
