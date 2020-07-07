import React from 'react';

import styled from 'styled-components';

// Ant
import { Icon } from '~/components';

const IconBackground = styled.span`
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  height: 35px;
  width: 35px;
`;

function Chevron({ opened }) {
  return (
    <IconBackground className="float-icon">
      {opened ? (
        <Icon type="solid" icon="fa-chevron-up" />
      ) : (
        <Icon type="solid" icon="fa-chevron-down" />
      )}
    </IconBackground>
  );
}

export default Chevron;
