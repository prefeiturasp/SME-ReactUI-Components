import React from 'react';
import { Upload } from '~/components';

export default {
  title: 'Components|Upload',
  component: Upload
};

export const All = () => {
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
    <>
      <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" onChange={exampleOnChange} />

      <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" accept="image/png" complementText=".jpg only" onChange={exampleOnChange} />

      <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" showUploadList={false} onChange={exampleOnChange} />

      <Upload dragger multiple action="https://www.mocky.io/v2/5cc8019d300000980a055e76" accept="image/jpeg, image/png" complementText="Arquivos suportados: .jpg e .png" onChange={exampleOnChange} />
    </>
  );
}

export const Default = () => {
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
    <>
      <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" onChange={exampleOnChange} />
    </>
  );
}

export const FileType = () => {
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
    <>
      <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" accept="image/png" complementText=".jpg only" onChange={exampleOnChange} />
    </>
  );
}

export const Avatar = () => {
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
    <>
      <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" showUploadList={false} onChange={exampleOnChange} />
    </>
  );
}

export const DragAndDrop = () => {
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
    <>
      <Upload dragger multiple action="https://www.mocky.io/v2/5cc8019d300000980a055e76" accept="image/jpeg, image/png" complementText="Arquivos suportados: .jpg e .png" onChange={exampleOnChange} />
    </>
  );
}

All.story = { name: 'all uploads' }
Default.story = { name: 'default' }
Avatar.story = { name: 'avatar' }
DragAndDrop.story = { name: 'drag and drop' }
FileType.story = { name: 'file type restrictions' }