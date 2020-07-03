import React from 'react';
import t from 'prop-types';

// Estilos
import { CollapseStyle } from './styles';

// Internal components
import Chevron from './components/Chevron';
import Panel from './components/Panel';

/**
 * `import { Collapse } from "@sme/secretui"`
 *
 * Um acordeão é um componente clicável que revela ou oculta o conteúdo associado a ele. Permitir que as pessoas tenham controle sobre o conteúdo, expandindo-o ou adiando-o para mais tarde, permite que eles decidam o que ler e o que ignorar. O recolhimento da página minimiza a rolagem, e os títulos servem como um mini-IA da página, permitindo que os usuários formem um modelo mental das informações disponíveis.
 *
 * # Boas práticas de uso
 * - Acordeões devem ser evitados quando seu público-alvo precisar da maior parte ou de todo o conteúdo da página para responder às perguntas deles. É melhor mostrar todo o conteúdo da página de uma vez, quando o caso de uso o suportar.
 * - Certifique-se de otimizar suas páginas para impressão. Os acordeões geralmente não são adequados para imprimir documentos e exigem que as pessoas imprimam trechos de conteúdo de cada vez.
 * - Nas tabelas, nas situações em que a lista possui apenas alguns itens expansíveis, os itens que não usam o acordeão devem ter o mesmo recuo que os outros. Quando aplicado a cartões, não é necessário manter o alinhamento do texto.
 */
function Collapse({
  children,
  activeKey,
  defaultActiveKey,
  onChange,
  destroyInactivePanel,
  ...props
}) {
  return (
    <CollapseStyle
      expandIconPosition="right"
      expandIcon={(panelProps) => <Chevron opened={panelProps.isActive} />}
      activeKey={activeKey}
      defaultActiveKey={defaultActiveKey}
      onChange={onChange}
      destroyInactivePanel={destroyInactivePanel}
      {...props}
    >
      {children}
    </CollapseStyle>
  );
}

Collapse.propTypes = {
  activeKey: t.array,
  defaultActiveKey: t.number,
  onChange: t.func,
  destroyInactivePanel: t.bool,
};

Collapse.defaultProps = {};

Collapse.Panel = Panel;

export default Collapse;
