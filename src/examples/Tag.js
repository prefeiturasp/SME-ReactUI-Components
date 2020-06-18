import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Tag } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function TagExample() {
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = ['Movies', 'Books', 'Music', 'Sports'];

  function exampleOnClose(e) {
    console.log(e);
  }

  function exampleHandleChange(tag, checked){
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  }
  
  return (
    <div className="App">
      <div>
        <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
          <div style={{ padding: '0.2rem 0.2rem' }}>
            <Tag size="small">Small</Tag>
            <Tag size="small">Small</Tag>
          </div>
          <div style={{ padding: '0.2rem 0.2rem' }}>
            <Tag>Medium</Tag>
            <Tag>Medium</Tag>
          </div>
          <div style={{ padding: '0.2rem 0.2rem' }}>
            <Tag size="large">Large</Tag>
            <Tag size="large">Large</Tag>
          </div>
          <div style={{ padding: '1rem 0.2rem' }}>
            <Tag closable onClose={exampleOnClose}>Tag closable</Tag>
            <Tag closable onClose={exampleOnClose}>Tag closable</Tag>
            <Tag closable onClose={exampleOnClose}>Tag closable</Tag>
          </div>
          <div style={{ padding: '1rem 0.2rem' }}>
            <span style={{ marginRight: 8 }}>Categories:</span>

            {tags.map(tag => (
              <Tag
                key={tag}
                checkable
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => exampleHandleChange(tag, checked)}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default TagExample;
