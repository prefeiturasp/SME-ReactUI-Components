import React from 'react';
import t from 'prop-types';

// Components
import { Button, Icon } from '~/components';

// Styles
import { UploadStyle } from './styles';

function Upload({ children }) {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <UploadStyle {...props}>
      <Button outline icon={<Icon type="solid" icon="fa-upload" />}>
        Upload
      </Button>
    </UploadStyle>
  );
};

Upload.propTypes = {
  visible: t.bool,
};

Upload.defaultProps = {
  visible: false,
};

export default Upload;
