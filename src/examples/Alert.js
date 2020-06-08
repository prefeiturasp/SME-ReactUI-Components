import React, { useState, useEffect, useCallback } from 'react';
import shortid from 'shortid';

// Ant
import { Input } from 'antd';

// Componentes
import { Alert } from '~/components';

// Theme
import { ThemeProvider } from 'styled-components';
import Temas, { support } from '~/themes';

function AlertExample() {
  const [alertas, setAlertas] = useState([]);

  useEffect(() => {
    setAlertas([
      {
        id: shortid.generate(),
        type: Alert.Utils.Type.SUCCESS,
        message: 'Ocorreu um erro. Contate o suporte.',
        closable: true,
        closeText: 'Fechar',
        timeout: 2000,
        showIcon: true,
      },
      {
        id: shortid.generate(),
        type: Alert.Utils.Type.ERROR,
        message: 'Ocorreu um erro. Contate o suporte.',
        closable: true,
        showIcon: true,
        timeout: 4000,
      },
      {
        id: shortid.generate(),
        type: Alert.Utils.Type.WARNING,
        message: 'Ocorreu um erro. Contate o suporte.',
        closable: true,
        showIcon: true,
        timeout: 6000,
      },
      {
        id: shortid.generate(),
        type: Alert.Utils.Type.INFO,
        message: 'Ocorreu um erro. Contate o suporte.',
        closable: true,
        showIcon: true,
        timeout: 8000,
      },
    ]);
  }, []);

  const handleClose = useCallback((item) => {
    setAlertas((estadoAnterior) =>
      estadoAnterior.filter((x) => x.id !== item.id)
    );
  }, []);

  return (
    <div style={{ width: '50%' }}>
      <ThemeProvider theme={{ ...support, ...Temas.temaSGC }}>
        <Alert.AlertToastr
          afterClose={(item) => handleClose(item)}
          list={alertas}
          position={Alert.Utils.Position.BOTTOM_RIGHT}
          float
        />
        <Alert.AlertBox
          visible
          text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
          title="Teste"
        />
      </ThemeProvider>
    </div>
  );
}

export default AlertExample;
