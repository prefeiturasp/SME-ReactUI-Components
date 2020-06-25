import * as React from 'react';
import t from 'prop-types';

// Styles
import { AlertBoxStyle } from '../styles';

function Box({ children, text, title, visible }) {
  return (
    visible && (
      <AlertBoxStyle title={title}>
        {title && <h2>{title}</h2>}
        {text}
        <div>{React.Children.count(children) > 0 && children}</div>
      </AlertBoxStyle>
    )
  );
}

Box.propTypes = {
  visible: t.bool,
  text: t.string,
  title: t.string,
};

Box.defaultProps = {
  visible: false,
  text: null,
  title: null,
};

export default Box;
