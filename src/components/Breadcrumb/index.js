import React from 'react';
import t from 'prop-types';
import shortid from 'shortid';

// Componentes
import { Icon } from '~/components';
import BreadcrumbItem from './components/BreadcrumbItem';

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
    <BreadcrumbStyle routes={[]} separator="">
      <BreadcrumbItem separator="" href="/">
        <Icon typeColor="primary" type="solid" icon="fa-home" />
      </BreadcrumbItem>
      <Separator />
      {items?.map((item, index) => (
        <React.Fragment key={shortid.generate()}>
          <BreadcrumbItem
            separator=""
            disabled={item.disabled}
            href={item.href}
            text={item.text}
          />
          {index + 1 !== items?.length && <Separator />}
        </React.Fragment>
      ))}
    </BreadcrumbStyle>
  );
}

Breadcrumb.propTypes = {
  items: t.oneOfType([t.array]).isRequired,
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
