import React from 'react';

import styled from 'styled-components';

// Ant
import { Icon } from '~/components';

const IconBackground = styled.span`
  background-color: whitesmoke;
  display: inline;
  padding: 0.5rem;
  border-radius: 50%;
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
