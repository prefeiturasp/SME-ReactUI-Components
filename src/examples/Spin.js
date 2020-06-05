import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Componentes
import { Spin, Alert, Button } from '~/components';

// Temas
import Themes from '~/themes';

function SpinExample() {
  const [ exampleLoading, setExampleLoading ] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setExampleLoading(false);
  //   }, 7000);
  // }, []);

  return (
    <div className="App">
      <div style={{ width: '50%' }}>
        <ThemeProvider theme={Themes.temaSIGPAE}>
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
        </ThemeProvider>
        <ThemeProvider theme={Themes.temaSGP}>
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
        <ThemeProvider theme={Themes.temaSGC}>
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
