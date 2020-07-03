import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Spin, Alert, Button, useTheme } from '~/components';

// Themes
import Themes from '~/themes';

function SpinExample() {
  const [exampleLoading, setExampleLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setExampleLoading(false);
    }, 7000);
  }, []);

  const tema = useTheme(Themes.temaSIGPAE);

  return (
    <div className="App">
      <div style={{ width: '50%' }}>
        <ThemeProvider theme={tema}>
          <div style={{ marginBottom: '0.2rem' }}>
            <Spin spinning={exampleLoading}>
              <Alert.AlertBox
                visible
                text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
                title="Teste"
              >
                <Button type="primary" styles={{ marginTop: '20px' }}>
                  Nova aula
                </Button>
              </Alert.AlertBox>
            </Spin>
          </div>
          <div style={{ marginBottom: '0.2rem' }}>
            <Spin spinning={exampleLoading} hideTip>
              <Alert.AlertBox
                visible
                text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
                title="Teste"
              >
                <Button type="primary" styles={{ marginTop: '20px' }}>
                  Nova aula
                </Button>
              </Alert.AlertBox>
            </Spin>
          </div>
          <div style={{ marginBottom: '0.2rem' }}>
            <Spin spinning={exampleLoading} size={30}>
              <Alert.AlertBox
                visible
                text="Mussum Ipsum, cacilds vidis litro abertis."
                title="Teste"
              />
            </Spin>
          </div>
          <div style={{ marginBottom: '0.2rem' }}>
            <Spin size={20} spinning={exampleLoading} hideTip />
          </div>
        </ThemeProvider>
        <ThemeProvider theme={tema}>
          <div style={{ marginBottom: '0.2rem' }}>
            <Spin spinning={exampleLoading}>
              <Alert.AlertBox
                visible
                text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
                title="Teste"
              >
                <Button type="primary" styles={{ marginTop: '20px' }}>
                  Nova aula
                </Button>
              </Alert.AlertBox>
            </Spin>
          </div>
        </ThemeProvider>
        <ThemeProvider theme={tema}>
          <div style={{ marginBottom: '0.2rem' }}>
            <Spin spinning={exampleLoading}>
              <Alert.AlertBox
                visible
                text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
                title="Teste"
              >
                <Button type="primary" styles={{ marginTop: '20px' }}>
                  Nova aula
                </Button>
              </Alert.AlertBox>
            </Spin>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default SpinExample;
