import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Tag, TextField, Icon, useTheme } from '~/components';

// Themes
import Themes from '~/themes';

function TagExample() {
  const theme = useTheme({
    Colors: {
      Primary: Themes.temaSIGPAE.primary,
      PrimaryLight: Themes.temaSIGPAE.primaryLight,
      PrimaryDark: Themes.temaSIGPAE.primaryDark,
    },
    ...Themes.temaSIGPAE,
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const tags = ['Movies', 'Books', 'Music', 'Sports'];

  function exampleOnClose(e) {
    console.log(e);
  }

  function exampleHandleChange(tag, checked){
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  }

  function handleShowInput() {
    setShowInput(true);
  }

  useEffect(() => {
    if (!showInput) return;
    
    const input = document.getElementById('inputNewTag');
    input.focus();

    input.addEventListener("focusout", () => setShowInput(false), false);
  }, [showInput]);
  
  return (
    <div className="App">
      <div>
        <ThemeProvider theme={theme}>
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
          <div style={{ padding: '1rem 0.2rem', display: 'flex' }}>
            <Tag closable size="large" onClose={exampleOnClose}>Tag closable</Tag>
            <Tag closable size="large" onClose={exampleOnClose}>Tag closable</Tag>
            <Tag closable size="large" onClose={exampleOnClose}>Tag closable</Tag>

            {showInput && (
              <TextField id="inputNewTag" />
            )}

            {!showInput && (
              <Tag add size="large" onClick={handleShowInput}>
                <Icon type="solid" icon="fa-plus" /> New Tag
              </Tag>
            )}
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
