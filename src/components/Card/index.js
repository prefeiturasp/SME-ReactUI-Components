import React from 'react';
import t from 'prop-types';

// Estilos
import { CardStyle } from './styles';

// Internal components
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';

/**
 * `import { Card } from "@sme/secretui"`
 *
 * Um cartão é um padrão de design da interface do usuário que agrupa informações relacionadas em um contêiner de tamanho flexível. Um cartão é um contêiner para algumas informações curtas e relacionadas.
 *
 * # Boas práticas de uso
 * - Os layouts de cartão são menos digitalizáveis ​​que as listas. Uma exibição de lista vertical padrão é mais digitalizável que os cartões, porque o posicionamento dos elementos individuais é fixo em tamanho e mais previsível para os olhos. Portanto, os cartões não são apropriados quando os usuários pesquisam um item específico de uma lista ou procuram um conteúdo específico.
 * - Os cartões são uma excelente opção para aplicativos de painel que exibem uma variedade de tipos de conteúdo ao mesmo tempo na mesma página. Nessas situações, a metáfora do cartão pode ajudar a criar diferenças mais óbvias entre os itens, e cada cartão pode acomodar elementos diferentes.
 */
function Card({ children, animate, borderLeft, borderBottom, rounded }) {
  return (
    <CardStyle
      animate={animate?.toString() ? "true": "false"}
      borderLeft={borderLeft?.toString() ? "false": "false"}
      borderBottom={borderBottom?.toString() ? "false": "false"}
      rounded={rounded?.toString() ? "false": "false"}
    >
      {children}
    </CardStyle>
  );
}

Card.propTypes = {
  animate: t.bool,
  borderLeft: t.bool,
  borderBottom: t.bool,
  rounded: t.bool,
};

Card.defaultProps = {
  animate: true,
  borderLeft: false,
  borderBottom: false,
  rounded: false,
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
