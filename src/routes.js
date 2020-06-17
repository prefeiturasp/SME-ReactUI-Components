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
import ModalExample from '~/examples/Modal';
import TooltipExample from '~/examples/Tooltip';
import CardExample from '~/examples/Card';
import UploadExample from '~/examples/Upload';
import TableExample from '~/examples/Table';
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
    title: 'Modal',
    path: '/components/modal',
    component: ModalExample,
    exact: true,
  },
  {
    title: 'Tooltip',
    path: '/components/tooltip',
    component: TooltipExample,
    exact: true,
  },
  {
    title: 'Card',
    path: '/components/card',
    component: CardExample,
    exact: true,
  },
  {
    title: 'Upload',
    path: '/components/upload',
    component: UploadExample,
    exact: true,
  },
  {
    title: 'Table',
    path: '/components/table',
    component: TableExample,
    exact: true,
  },
];
