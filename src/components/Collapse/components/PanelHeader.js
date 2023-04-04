import React from 'react';
import t from 'prop-types';

// Styles
import { PanelHeaderStyle, PanelHeaderTextStyle, PanelHeaderTitleStyle, PanelHeaderSubtitleStyle, PanelHeaderIconContentStyle } from '../styles';
import { Row, Col } from 'antd';
import Icon from '~/components/Icon';

function PanelHeader({
  title,
  subtitle,
  icon,
  iconColor,
  key,
  ...props
}) {
  return (
    <PanelHeaderStyle
      key={key}
      {...props}
    >
        {icon && <PanelHeaderIconContentStyle>
            <Icon icon={icon} size='xs' color={iconColor}/>
        </PanelHeaderIconContentStyle>}
        <PanelHeaderTextStyle>
            <PanelHeaderTitleStyle>{title}</PanelHeaderTitleStyle>
            <PanelHeaderSubtitleStyle>{subtitle}</PanelHeaderSubtitleStyle>
        </PanelHeaderTextStyle>
    </PanelHeaderStyle>
  );
}

PanelHeader.propTypes = {
  title: t.string,
  subtitle: t.string,
  icon: t.string,
  key: t.oneOfType([t.string]),
};

PanelHeader.defaultProps = {
  title: '',
  subtitle: '',
  icon: '',
};

export default PanelHeader;
