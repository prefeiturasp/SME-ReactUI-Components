import React from 'react';
import t from 'prop-types';
import shortid from 'shortid';

// Estilo
import { AlertToastStyle, AlertToastrStyle, AlertBoxStyle } from './styles';

// Utils
import Utils from './utils';

function AlertToast({ props, afterClose }) {
  return <AlertToastStyle afterClose={afterClose} {...props} />;
}

function AlertToastr({ list, position, float, afterClose }) {
  return (
    <AlertToastrStyle float={float} position={position}>
      {list?.map((item) => {
        if (item?.timeout) {
          setTimeout(() => afterClose(item), item.timeout);
        }

        return (
          <AlertToast
            key={shortid.generate()}
            props={{ ...item }}
            afterClose={() => afterClose(item)}
          />
        );
      })}
    </AlertToastrStyle>
  );
}

AlertToastr.propTypes = {
  list: t.oneOfType([t.array]),
};

AlertToastr.defaultProps = {
  list: [],
};

function AlertBox({ children, text, title, visible }) {
  return (
    visible && (
      <AlertBoxStyle title={title}>
        {title && <h2>{title}</h2>}
        {text}
        {React.Children.count(children) > 0 && children}
      </AlertBoxStyle>
    )
  );
}

AlertToast.Utils = Utils;
AlertToast.AlertBox = AlertBox;
AlertToast.AlertToastr = AlertToastr;
export default AlertToast;
