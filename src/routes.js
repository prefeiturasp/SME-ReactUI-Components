import ButtonExample from '~/examples/Button';
import AlertExample from '~/examples/Alert';
import BreadcrumbExample from '~/examples/Breadcrumb';
import CollapseExample from '~/examples/Collapse';
import SpinExample from '~/examples/Spin';
import CheckboxExample from '~/examples/Checkbox';
import RadioExample from '~/examples/Radio';
import SelectExample from '~/examples/Select';
import SwitchExample from '~/examples/Switch';
import PaginationExample from '~/examples/Pagination';
import CardExample from '~/examples/Card';
import Summary from '~/Summary';

export default [
  {
    title: 'Summary',
    path: '/components',
    component: Summary,
    exact: false,
  },
  {
    title: 'Button',
    path: '/components/button',
    component: ButtonExample,
    exact: true,
  },
  {
    title: 'Alert',
    path: '/components/alert',
    component: AlertExample,
    exact: true,
  },
  {
    title: 'Breadcrumb',
    path: '/components/breadcrumb',
    component: BreadcrumbExample,
    exact: true,
  },
  {
    title: 'Collapse',
    path: '/components/collapse',
    component: CollapseExample,
    exact: true,
  },
  {
    title: 'Spin',
    path: '/components/spin',
    component: SpinExample,
  },
  {
    title: 'Checkbox',
    path: '/components/checkbox',
    component: CheckboxExample,
    exact: true,
  },
  {
    title: 'Radio',
    path: '/components/radio',
    component: RadioExample,
    exact: true,
  },
  {
    title: 'Select',
    path: '/components/select',
    component: SelectExample,
    exact: true,
  },
  {
    title: 'Switch',
    path: '/components/switch',
    component: SwitchExample,
    exact: true,
  },
  {
    title: 'Pagination',
    path: '/components/pagination',
    component: PaginationExample,
    exact: true,
  },
  {
    title: 'Card',
    path: '/components/card',
    component: CardExample,
    exact: true,
  },
];
