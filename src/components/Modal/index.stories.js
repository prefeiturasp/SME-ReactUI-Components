import React, { useState } from 'react';
import { Modal, Button } from '~/components';

export default {
  title: 'Components|Modal',
  component: Modal
};

export const Default = () => {
  const [ openModal, setOpenModal ] = useState(false);

  function exampleSubmit(){
    console.log('exampleSubmit');
    setOpenModal(false);
  }

  return (
    <>
      <Button type="primary" onClick={() => setOpenModal(true)}>
        Open modal
      </Button>

      <Modal
        visible={openModal}
        title="Example title"
        footer={[
          <Button type="primary" outline key="back" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>,
          <Button type="primary" key="submit"  onClick={exampleSubmit}>
            Submit
          </Button>,
        ]}
        onCancel={() => setOpenModal(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

Default.story = { name: 'default' }