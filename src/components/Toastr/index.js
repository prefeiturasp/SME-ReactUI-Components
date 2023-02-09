import * as React from 'react';
import t from 'prop-types';

// Estilo
import { notification } from 'antd';

/**
 * `import { Toastr } from "@sme/secretui"`
 *
 * Informam os usuários sobre um processo que foi executado ou irá ser executado. Eles aparecem temporariamente, na parte superior da tela. Eles não devem interromper a experiência do usuário e não exigem ação do usuário para que desapareça.
 * Por questões de contraste, são apresentados em tons escuros e seguem as orientações de cores de apoio em temas escuros.
 *
 * # Boas práticas de uso
 * - Deve aparecer um de cada vez e no máximo duas linhas devem ser usadas para exibir as mensagens.
 * - Use as notificações para apresentar informações que precisam ser visualizadas imediatamente e que requerem atenção do usuário.
 * - Apresente mensagens claras e concisas e dê ações de acompanhamento para permitir que o usuário fique mais informado ou resolva o problema.
 * - Evite exibir mensagens com códigos de erro técnico que não ajudam o usuário a resolver o problema.
 * - Apresente mensagens específicas para cada situação em vez de usar mensagens padrão.
 * - Assuma a culpa quando for apropriado. Diga "estamos com problemas para conectar" em vez de "você está tendo problemas de conexão".
 */
 export default {
  success({message, description, placement}){
    notification.success({message, description, placement, style:{}})
  },
  error({message, description, placement}){
    notification.error({message, description, placement, style:{}})
  },
 }