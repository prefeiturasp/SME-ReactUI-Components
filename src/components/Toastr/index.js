import * as React from 'react';
import t from 'prop-types';
import { notification } from 'antd';

import './style.css';
/**
 * `import { ToastrService } from "@sme/secretui"`
 *
 * Utilize toasts para mostrar informações que requerem mínima interação do usuário. 
 * As mensagens desaparecem após alguns segundos ou podem ser fechadas manualmente e são apresentadas nos cantos inferiores da tela. As mensagens não podem atrapalhar o fluxo de trabalho do usuário. 
 * São comumente utilizadas para alertar sobre status de tarefas.
 *
 * # Boas práticas de uso
 * - Deve aparecer um de cada vez e no máximo duas linhas devem ser usadas para exibir as mensagens.
 * - Use as notificações para apresentar informações que precisam ser visualizadas imediatamente e que requerem atenção do usuário.
 * - Apresente mensagens claras e concisas e dê ações de acompanhamento para permitir que o usuário fique mais informado ou resolva o problema.
 * - Evite exibir mensagens com códigos de erro técnico que não ajudam o usuário a resolver o problema.
 * - Apresente mensagens específicas para cada situação em vez de usar mensagens padrão.
 * - Assuma a culpa quando for apropriado. Diga "estamos com problemas para conectar" em vez de "você está tendo problemas de conexão".
 */
 function Toastr(){
  return (
    <></>
  )
 }
 Toastr.propTypes = {
  message: t.node,
  description: t.node,
  btn: t.node,
  key: t.string,
  onClose: t.func,
  duration: t.number,
  icon: t.element,
  placement: t.oneOf(['topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight']),
  prefixCls: t.string,
  className: t.string,
  readonly: t.bool,
  onClick: t.func,
  top: t.number,
  bottom: t.number,
  getContainer: () => HTMLElement,
  closeIcon: t.element,  
};

 export default Toastr;

 export class ToastrService {
  constructor(){
    this.className = 'toastr'
  }
  success(props){
    notification.success({...props, className: this.className});
  }
  error(props){
    notification.error({...props, className: this.className});
  }
  warning(props){
    notification.warning({...props, className: this.className});
  }
  info(props){
    notification.info({...props, className: this.className});
  }    
}