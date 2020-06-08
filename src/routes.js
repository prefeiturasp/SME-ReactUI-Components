import ButtonExample from '~/examples/Button';
import AlertExample from '~/examples/Alert';
import BreadcrumbExample from '~/examples/Breadcrumb';
import CollapseExample from '~/examples/Collapse';
import SpinExample from '~/examples/Spin';
import CheckboxExample from '~/examples/Checkbox';
import RadioExample from '~/examples/Radio';

export default [
  {
    path: '/components/button',
    component: ButtonExample,
    exact: true,
  },
  {
    path: '/components/alert',
    component: AlertExample,
    exact: true,
  },
  {
    path: '/components/breadcrumb',
    component: BreadcrumbExample,
    exact: true,
  },
  {
    path: '/components/collapse',
    component: CollapseExample,
    exact: true,
  },
  {
    path: '/components/spin',
    component: SpinExample,
  },
  {
    path: '/components/checkbox',
    component: CheckboxExample,
    exact: true,
  },
  {
    path: '/components/radio',
    component: RadioExample,
    exact: true,
  }
];
