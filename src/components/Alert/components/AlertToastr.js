import * as React from 'react';
import shortid from 'shortid';
import t from 'prop-types';

// Components
import { Alert } from '~/components';

// Styles
import { AlertToastrStyle } from '../styles';

// Utils
import Utils from '../utils';

function Toastr({ list, position, float, afterClose }) {
  return (
    <AlertToastrStyle float={float} position={position}>
      {list?.map((item) => {
        if (item?.timeout) {
          setTimeout(() => afterClose(item), item.timeout);
        }

        return (
          <Alert
            key={shortid.generate()}
            type={item.type}
            showIcon={item.showIcon}
            icon={item.icon}
            message={item.message}
            closable={item.closable}
            closeText={item.closeText}
            afterClose={() => afterClose(item)}
          />
        );
      })}
    </AlertToastrStyle>
  );
}

Toastr.propTypes = {
  list: t.oneOfType([t.array]).isRequired,
  position: t.oneOf([
    Utils.Position.TOP_LEFT,
    Utils.Position.TOP_RIGHT,
    Utils.Position.TOP_CENTER,
    Utils.Position.BOTTOM_LEFT,
    Utils.Position.BOTTOM_RIGHT,
    Utils.Position.BOTTOM_CENTER,
  ]),
  float: t.bool,
  afterClose: t.func.isRequired,
};

Toastr.defaultProps = {
  position: Utils.Position.BOTTOM_RIGHT,
  float: false,
};

export default Toastr;
