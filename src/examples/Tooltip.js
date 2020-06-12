import React from 'react';

// Components
import { Tooltip } from '~/components';

function TooltipExample() {
  return (
    <div className="App">
      <div style={{ padding: '0.2rem' }}>
        <Tooltip title="Text example">
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </div>
      <div style={{ padding: '0.2rem' }}>
        <Tooltip title="Text example" placement="bottomRight">
          <span>Tooltip will show on mouse enter (with a placement defined - bottomRight).</span>
        </Tooltip>
      </div>
    </div>
  );
}

export default TooltipExample;
