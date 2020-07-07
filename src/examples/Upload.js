import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Upload } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function UploadExample() {
  function exampleOnChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
  }

  return (
    <div className="App">
      <div>
        <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
          <div style={{ padding: '1rem 0.2rem' }}>
            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" onChange={exampleOnChange} />
          </div>

          <div style={{ padding: '1rem 0.2rem' }}>
            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" accept="image/png" complementText=".jpg only" onChange={exampleOnChange} />
          </div>

          <div style={{ padding: '1rem 0.2rem' }}>
            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" showUploadList={false} onChange={exampleOnChange} />
          </div>

          <div style={{ padding: '1rem 0.2rem' }}>
            <Upload dragger multiple action="https://www.mocky.io/v2/5cc8019d300000980a055e76" accept="image/jpeg, image/png" complementText="Arquivos suportados: .jpg e .png" onChange={exampleOnChange} />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default UploadExample;
