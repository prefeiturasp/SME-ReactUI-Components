import React from 'react';
import t from 'prop-types';

// Styles
import { TabPaneStyle } from '../styles';


const TabPane = ({ children, key, tab, disabled, ...rest }) => {
  return (
    <TabPaneStyle disabled={disabled} key={key} tab={tab} {...rest}>
      {children}
    </TabPaneStyle>
  );
};

TabPane.propTypes = {
  key: t.oneOfType([t.string, t.number]),
  tab: t.oneOfType([t.element, t.string, t.elementType, t.node]),
  disabled: t.bool,
};

TabPane.defaultProps = { disabled: false };

export default TabPane;
