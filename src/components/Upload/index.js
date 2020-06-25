import React, { useState } from 'react';
import t from 'prop-types';

// Components
import { Button, Icon, Spin } from '~/components';

// Styles
import { UploadStyle, DraggerStyle } from './styles';

function Upload({ dragger, action, listType, multiple, showUploadList, accept, complementText, disabled, onChange }) {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ imageUrl, setImageUrl ] = useState(null);
  
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function defaultOnChange(info) {
    if (listType === "picture-card"){
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrl =>
          setImageUrl(imageUrl)
        );
      } else {
        setImageUrl(null);
      }

      setError(info.file.status === 'error');
      setIsLoading(info.file.status === 'uploading');
    }
    
    onChange(info);
  }

  function ContentText() {
    return (
      <Button disabled={disabled} outline icon={<Icon type="solid" icon="fa-upload" />}>
        Upload
      </Button>
    )
  }

  function ContentPictureCard() {
    if (imageUrl){
      return <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
    }

    return (
      <div className={`contentPictureCard ${error ? 'error' : ''}`}>
        {isLoading ? <Spin size={20} spinning={true} hideTip /> : <Icon type="solid" icon="fa-plus" />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
  }

  const props = {
    action,
    listType,
    multiple,
    showUploadList,
    disabled,
    accept,
    onChange: defaultOnChange,
  }

  if (dragger) {
    return (
      <DraggerStyle {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="solid" icon="fa-inbox" />
        </p>

        <p className="ant-upload-text">Clique ou arraste para fazer o upload.</p>
        
        {complementText && (
          <p className="ant-upload-hint">
            {complementText}
          </p>
        )}
      </DraggerStyle>
    )
  }

  return (
    <div>
      <UploadStyle {...props}>
        {listType === "text" && <ContentText />}
        {listType === "picture-card" && <ContentPictureCard />}
      </UploadStyle>

      {complementText && (
        <span className="complementText">{complementText}</span>
      )}
    </div>
  );
};

Upload.propTypes = {
  dragger: t.bool,
  action: t.string,
  listType: t.oneOf(['text', 'picture', 'picture-card']),
  multiple: t.bool,
  showUploadList: t.bool,
  accept: t.string,
  complementText: t.string,
  disabled: t.bool,
  onChange: t.func,
};

Upload.defaultProps = {
  dragger: false,
  listType: "text",
  multiple: false,
  showUploadList: true,
  disabled: false,
  onChange: () => {}
};

export default Upload;
