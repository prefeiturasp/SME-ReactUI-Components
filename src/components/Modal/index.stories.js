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
          <Button type="text" color="dark" key="back" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>,
          <Button type="outlined" color="primary" key="submit"  onClick={exampleSubmit}>
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

export const ModalDialog = () => {
  const [ openModal, setOpenModal ] = useState(false);

  function exampleSubmit(){
    console.log('exampleSubmit');
    setOpenModal(false);
  }

  return (
    <>
      <Button type="primary" onClick={() => setOpenModal(true)}>
        Open modal dialog
      </Button>

      <Modal
        visible={openModal}
        mask={false}
        closable={false}
        maskClosable={false}
        title="Confirm action"
        footer={[
          <Button type="text" color="dark" key="back" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>,
          <Button type="outlined" color="primary" key="submit"  onClick={exampleSubmit}>
            Confirm
          </Button>,
        ]}
        onCancel={() => setOpenModal(false)}
      >
        <p>Are you sure you want to do this?</p>
      </Modal>
    </>
  );
}


Default.story = { name: 'default' }
ModalDialog.story = { name: 'modal dialog' }