import React, { useEffect } from 'react';
import shortid from 'shortid';

// Componentes
import { Icon } from '~/components';

// Estilos
import { BreadcrumbStyle } from './styles';

function Separator() {
  return (
    <BreadcrumbStyle.Separator>
      <Icon typeColor="primary" type="solid" icon="fa-chevron-circle-right" />
    </BreadcrumbStyle.Separator>
  );
}

function Breadcrumb({ items }) {
  return (
    <BreadcrumbStyle
      routes={[]}
      separator={<Icon type="solid" icon="fa-chevron-right" />}
    >
      <BreadcrumbItem href="/">
        <Icon typeColor="primary" type="solid" icon="fa-home" />
      </BreadcrumbItem>
      <Separator />
      {items?.map((item, index) => (
        <React.Fragment key={shortid.generate()}>
          <BreadcrumbItem disabled={item.disabled} href={item.href}>
            <span>{item.text}</span>
          </BreadcrumbItem>
          {index + 1 !== items?.length && <Separator />}
        </React.Fragment>
      ))}
    </BreadcrumbStyle>
  );
}

function BreadcrumbItem({ disabled, name, href, path, target, children }) {
  return (
    <BreadcrumbStyle.Item href={href} disabled={disabled}>
      {children}
    </BreadcrumbStyle.Item>
  );
}

export default Breadcrumb;
