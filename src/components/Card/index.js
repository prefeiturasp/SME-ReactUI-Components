import React from 'react';

// Estilos
import {
  CardStyle,
  CardHeadStyle,
  CardFootStyle,
  CardBodyStyle,
} from './styles';

function Card({ children, animate, borderLeft, borderBottom, ...rest }) {
  return (
    <CardStyle
      animate={animate}
      borderLeft={borderLeft}
      borderBottom={borderBottom}
      {...rest}
    >
      {children}
    </CardStyle>
  );
}

function CardHeader({ children, ...rest }) {
  return <CardHeadStyle {...rest}>{children}</CardHeadStyle>;
}

function CardBody({ children, ...rest }) {
  return (
    <CardBodyStyle bordered={false} {...rest}>
      {children}
    </CardBodyStyle>
  );
}

function CardFooter({ children, ...rest }) {
  return (
    <CardFootStyle bordered={false} {...rest}>
      {children}
    </CardFootStyle>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
