import React from 'react';
import { Icon } from '~/components';

const TabPaneTitle = ({ icon, title }) => {
  return (
    <>
        {icon ? (
        <span>
            <Icon color="primary" size="xs" icon={icon} />
            &nbsp; {title}
        </span>  
        ) : (
            title
        )}
    </>
  );
};

export default TabPaneTitle;
