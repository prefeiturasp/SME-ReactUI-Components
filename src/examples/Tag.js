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
          <div style={{ padding: '1rem 0.2rem' }}>
            <Tag>Example tag</Tag>
            <Tag closable onClose={exampleOnClose}>Tag closable</Tag>
          </div>
          <div style={{ padding: '1rem 0.2rem' }}>
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
