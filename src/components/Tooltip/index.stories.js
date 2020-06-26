import React from 'react';
import { Tooltip, Button } from '~/components';

export default {
  title: 'Tooltip',
  component: Tooltip
};

export const All = () => {
  const text = "Text example";

  return (
    <>
      <div>
        <Tooltip title={text}>
          <Button type="primary">Default</Button>
        </Tooltip>
      </div>

      <div className="examplePlacements">
        <div className="examplePlacements__globalHorizontal">
          <Tooltip placement="topLeft" title={text}>
            <Button type="primary">TL</Button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <Button type="primary">Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title={text}>
            <Button type="primary">TR</Button>
          </Tooltip>
        </div>
        <div className="examplePlacements__globalVertical">
          <div>
            <Tooltip placement="leftTop" title={text}>
              <Button type="primary">LT</Button>
            </Tooltip>
            <Tooltip placement="left" title={text}>
              <Button type="primary">Left</Button>
            </Tooltip>
            <Tooltip placement="leftBottom" title={text}>
              <Button type="primary">LB</Button>
            </Tooltip>
          </div>
          <div>
            <Tooltip placement="rightTop" title={text}>
              <Button type="primary">RT</Button>
            </Tooltip>
            <Tooltip placement="right" title={text}>
              <Button type="primary">Right</Button>
            </Tooltip>
            <Tooltip placement="rightBottom" title={text}>
              <Button type="primary">RB</Button>
            </Tooltip>
          </div>
        </div>
        <div className="examplePlacements__globalHorizontal">
          <Tooltip placement="bottomLeft" title={text}>
            <Button type="primary">BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <Button type="primary">Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <Button type="primary">BR</Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export const Default = () => (
  <>
    <Tooltip title="Text example">
      <Button type="primary">Default</Button>
    </Tooltip>
  </>
);

export const Placement = () => {
  const text = "Text example";

  return (
    <div className="examplePlacements">
      <div className="examplePlacements__globalHorizontal">
        <Tooltip placement="topLeft" title={text}>
          <Button type="primary">TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text}>
          <Button type="primary">Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text}>
          <Button type="primary">TR</Button>
        </Tooltip>
      </div>
      <div className="examplePlacements__globalVertical">
        <div>
          <Tooltip placement="leftTop" title={text}>
            <Button type="primary">LT</Button>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <Button type="primary">Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <Button type="primary">LB</Button>
          </Tooltip>
        </div>
        <div>
          <Tooltip placement="rightTop" title={text}>
            <Button type="primary">RT</Button>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <Button type="primary">Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <Button type="primary">RB</Button>
          </Tooltip>
        </div>
      </div>
      <div className="examplePlacements__globalHorizontal">
        <Tooltip placement="bottomLeft" title={text}>
          <Button type="primary">BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text}>
          <Button type="primary">Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text}>
          <Button type="primary">BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};

All.story = { name: 'all tooltips' };
Default.story = { name: 'default' };
Placement.story = { name: 'placement (positions)' };