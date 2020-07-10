import React from 'react';
import { Pagination } from '~/components';

export default {
  title: 'Components|Pagination',
  component: Pagination
};

export const All = () => {
  function handleOnChange(page) {
    console.log(page);
  };

  return (
    <>
      <Pagination size="small" total={500} onChange={handleOnChange} />
      <Pagination size="medium" total={500} onChange={handleOnChange} />
      <Pagination size="large" total={500} onChange={handleOnChange} />
    </>
  );
}

All.story = { name: 'all paginations' }