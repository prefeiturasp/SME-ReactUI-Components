import React, { useState, useCallback, useRef } from 'react';
import { ThemeProvider } from 'styled-components';

// Componentes
import { Button, Icon } from '~/components';

// Temas
import Themes from '~/themes';

function ButtonExample() {
  const [carregando, setCarregando] = useState(false);
  const ref = useRef();

  const toggleLoading = useCallback(() => {
    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={Themes.temaSIGPAE}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ paddingBottom: '10px' }}>
            <div style={{ padding: '0.2rem' }}>
              {carregando?.teste}
              <Button
                type="primary"
                size="small"
                outline
                loading={carregando}
                onClick={toggleLoading}
                ref={ref}
                icon={<Icon type="solid" icon="fa-sync-alt" />}
              >
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              {carregando?.teste}
              <Button
                type="primary"
                size="middle"
                outline
                loading={carregando}
                onClick={toggleLoading}
                ref={ref}
                icon={<Icon type="solid" icon="fa-sync-alt" />}
              >
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              {carregando?.teste}
              <Button
                type="primary"
                size="large"
                outline
                loading={carregando}
                onClick={toggleLoading}
                ref={ref}
                icon={<Icon type="solid" icon="fa-sync-alt" />}
              >
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button
                size="large"
                outline
                loading={carregando}
                onClick={toggleLoading}
                ref={ref}
              >
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button
                type="primary"
                size="large"
                loading={carregando}
                onClick={toggleLoading}
                ref={ref}
              >
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button
                size="large"
                loading={carregando}
                onClick={toggleLoading}
                ref={ref}
              >
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
              </Button.Group>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
              </Button.Group>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button outline size="small" ref={ref}>
                  Nova aula
                </Button>
                <Button outline size="small" ref={ref}>
                  Nova aula
                </Button>
                <Button outline size="small" ref={ref}>
                  Nova aula
                </Button>
              </Button.Group>
            </div>
          </div>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={Themes.temaSGP}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ paddingBottom: '10px' }}>
            <div style={{ padding: '0.2rem' }}>
              <Button type="primary" size="large" outline ref={ref}>
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button size="large" outline ref={ref}>
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button type="primary" size="large" ref={ref}>
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button size="large" ref={ref}>
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
              </Button.Group>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
              </Button.Group>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button ref={ref}>Nova aula</Button>
                <Button ref={ref}>Nova aula</Button>
                <Button ref={ref}>Nova aula</Button>
              </Button.Group>
            </div>
          </div>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={Themes.temaSGC}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ paddingBottom: '10px' }}>
            <div style={{ padding: '0.2rem' }}>
              <Button type="primary" size="large" outline ref={ref}>
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button size="large" outline ref={ref}>
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button type="primary" size="large" ref={ref}>
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button size="large" ref={ref}>
                Cadastrar
              </Button>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" ref={ref}>
                  Nova aula
                </Button>
              </Button.Group>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
                <Button type="primary" outline ref={ref}>
                  Nova aula
                </Button>
              </Button.Group>
            </div>
            <div style={{ padding: '0.2rem' }}>
              <Button.Group>
                <Button ref={ref}>Nova aula</Button>
                <Button ref={ref}>Nova aula</Button>
                <Button ref={ref}>Nova aula</Button>
              </Button.Group>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default ButtonExample;
