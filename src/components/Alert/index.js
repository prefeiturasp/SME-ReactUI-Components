import React from 'react';
import t from 'prop-types';
import shortid from 'shortid';

// Estilo
import { AlertToastStyle, AlertToastrStyle, AlertBoxStyle } from './styles';

function AlertToast({ props, afterClose }) {
  return <AlertToastStyle afterClose={afterClose} {...props} />;
}

function AlertToastr({ list, position, afterClose }) {
  return (
    <AlertToastrStyle>
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

AlertToast.Types = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info',
};

AlertToast.AlertBox = AlertBox;
AlertToast.AlertToastr = AlertToastr;
export default AlertToast;
