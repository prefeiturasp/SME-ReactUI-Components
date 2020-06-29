import React, { useState, useEffect } from 'react';
import { Tag, TextField, Icon } from '~/components';

export default {
  title: 'Tag',
  component: Tag
};

export const All = () => {
  const [showInput, setShowInput] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = ['Movies', 'Books', 'Music', 'Sports'];

  useEffect(() => {
    if (!showInput) return;
    
    const input = document.getElementById('inputNewTag');
    input.focus();

    input.addEventListener("focusout", () => setShowInput(false), false);
  }, [showInput]);

  function handleOnClose(e) {
    console.log(e);
  }

  function handleOnChange(tag, checked){
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  }

  return (
    <>
      <div>
        <Tag size="small">Small</Tag>
        <Tag size="medium">Medium</Tag>
        <Tag size="large">Large</Tag>
      </div>

      <div>
        <Tag closable size="large" onClose={handleOnClose}>Tag closable</Tag>
        <Tag closable size="large" onClose={handleOnClose}>Tag closable</Tag>
        <Tag closable size="large" onClose={handleOnClose}>Tag closable</Tag>
      </div>

      <div style={{ display: 'flex' }}>
        <Tag closable size="large" onClose={handleOnClose}>Tag closable</Tag>

        {showInput && (
          <TextField id="inputNewTag" />
        )}

        {!showInput && (
          <Tag add size="large" onClick={() => setShowInput(true)}>
            <Icon type="solid" icon="fa-plus" /> New Tag
          </Tag>
        )}
      </div>

      <div>
        <span style={{ marginRight: 8 }}>Categories:</span>

        {tags.map(tag => (
          <Tag
            key={tag}
            checkable
            checked={selectedTags.indexOf(tag) > -1}
            onChange={checked => handleOnChange(tag, checked)}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </>
  );
}

export const Sizes = () => {
  return (
    <>
      <Tag size="small">Small</Tag>
      <Tag size="medium">Medium</Tag>
      <Tag size="large">Large</Tag>
    </>
  );
}

export const Closable = () => {
  function handleOnClose(e) {
    console.log(e);
  }
  return (
    <>
      <Tag closable size="large" onClose={handleOnClose}>Tag closable</Tag>
      <Tag closable size="large" onClose={handleOnClose}>Tag closable</Tag>
      <Tag closable size="large" onClose={handleOnClose}>Tag closable</Tag>
    </>
  );
}

export const AddNewTag = () => {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (!showInput) return;
    
    const input = document.getElementById('inputNewTag');
    input.focus();

    input.addEventListener("focusout", () => setShowInput(false), false);
  }, [showInput]);

  function handleOnClose(e) {
    console.log(e);
  }

  return (
    <div style={{ display: 'flex' }}>
      <Tag closable size="large" onClose={handleOnClose}>Tag closable</Tag>

      {showInput && (
        <TextField id="inputNewTag" />
      )}

      {!showInput && (
        <Tag add size="large" onClick={() => setShowInput(true)}>
          <Icon type="solid" icon="fa-plus" /> New Tag
        </Tag>
      )}
    </div>
  );
}

export const Checkable = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = ['Movies', 'Books', 'Music', 'Sports'];

  function handleOnChange(tag, checked){
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  }

  return (
    <div>
      <span style={{ marginRight: 8 }}>Categories:</span>

      {tags.map(tag => (
        <Tag
          key={tag}
          checkable
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleOnChange(tag, checked)}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}

All.story = { name: 'all tags' }
Sizes.story = { name: 'sizes' }
Closable.story = { name: 'closable' }
AddNewTag.story = { name: 'add new tag' }
Checkable.story = { name: 'checkable' }