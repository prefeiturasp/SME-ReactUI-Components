import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Modal, Button } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function ModalExample() {
  const [ openModal, setOpenModal ] = useState(false);

  function exampleSubmit(){
    console.log('exampleSubmit');
    setOpenModal(false);
  }

  return (
    <div className="App">
      <div>
        <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
          <div style={{ padding: '0.2rem' }}>
            <Button type="primary" onClick={() => setOpenModal(true)}>
              Open modal
            </Button>

            <Modal
              visible={openModal}
              title="Example title"
              footer={[
                <Button type="primary" outline key="back" onClick={() => setOpenModal(false)}>
                  Test cancel
                </Button>,
                <Button type="primary" key="submit"  onClick={exampleSubmit}>
                  Test submit
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
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ModalExample;
