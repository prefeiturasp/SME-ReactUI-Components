import React from 'react';

// Components
import { Typography } from '~/components';

// Assets
import DesignSystemImg from './assets/design-system.png';

const { Title, Paragraph, Text } = Typography;

export default {
  title: 'Overview|Design System',
};

export const IntroStory = () => {
  return (
    <div style={{ margin: '1rem' }}>
      <Title level={2} weight="bold">
        Bem-vindo ao Design System da Secretaria Municipal de Educação de São
        Paulo(SME)
      </Title>
      <Paragraph>Nossos principais objetivos são:</Paragraph> <br />
      <ul>
        <li>
          <Text weight="bold">
            Projetar mais rapidamente, graças às diretrizes padrão e aos
            componentes da interface do usuário;
          </Text>
        </li>
        <li>
          <Text weight="bold">
            Desenvolver mais rapidamente graças a estilos e componentes de
            código bem definidos;
          </Text>
        </li>
        <li>
          <Text weight="bold">
            Construir sistemas mais consistentes que ajudem na curva de
            aprendizado dos nossos usuários.
          </Text>
        </li>
      </ul>
      <Title level={2} weight="bold">
        O que é Design System
      </Title>
      <Paragraph>
        Um design system é uma coleção de
        <strong>componentes gráficos reutilizáveis</strong>, padrões de design,
        guias de estilo, que definem uma{' '}
        <strong>linguagem visual comum para as equipes de produtos</strong>.{' '}
      </Paragraph>
      <Paragraph>
        Acelera o processo de design e preenche a lacuna entre as equipes
        envolvidas na construção de um produto final, tendo padrões gráficos
        claros, o que facilita a montagem de sites a partir de componentes.
        Então, basicamente, o design system é um livro de regras para equipes
        gráficas e de desenvolvimento, que podemos decompor assim:
      </Paragraph>
      <br />
      <ul>
        <li>
          <Text>
            <strong>Design System</strong> - o conjunto completo de padrões de
            design, juntamente com princípios, padrões e componentes de código
            para alcançá-los
          </Text>
        </li>
        <li>
          <Text>
            <strong>Pattern Library</strong> - uma subclasse de um sistema de
            design que define padrões de design permitidos
          </Text>
        </li>
        <li>
          <Text>
            <strong>Style Guide</strong> - uma subclasse que mostra a aparência
            dos produtos, contendo casos de uso para padrões de interface do
            usuário, tipografia etc.
          </Text>
        </li>
      </ul>
      <br />
      <Paragraph>
        <img src={DesignSystemImg} />
      </Paragraph>
      <br />
      <Title level={2} weight="bold">
        Benefícios
      </Title>
      <Paragraph>
        O design system fornece consistência no design de novos elementos da
        identificação visual dos sistemas digitais desenvolvidos. O design
        system cria experiências diretas e bonitas para o usuário final e a
        equipe do produto, facilitando muito a colaboração para:
      </Paragraph>{' '}
      <br />
      <ul>
        <li>
          <Text>
            <strong>Designers</strong>, pois eles podem dividir o processo de
            design em partes menores, mais fáceis de trabalhar, gerenciar e
            alterar do que toda a página da web.
          </Text>
        </li>
        <li>
          <Text>
            <strong>Desenvolvedores</strong>, para que eles tenham uma visão
            clara de como criar os componentes necessários para manter os
            estilos unificados.
          </Text>
        </li>
        <li>
          <Text>
            <strong>Gerentes do produto</strong>, como abordagem baseada em
            componentes tornam a solicitação de equipes de desenvolvimento para
            elementos adicionais da página em um processo super fácil e rápido.
          </Text>
        </li>
      </ul>
    </div>
  );
};

IntroStory.story = {
  name: 'Bem Vindo',
};
