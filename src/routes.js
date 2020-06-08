import ButtonExample from '~/examples/Button';
import AlertExample from '~/examples/Alert';
import SpinExample from '~/examples/Spin';
import CheckboxExample from '~/examples/Checkbox';

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
    path: '/components/spin',
    component: SpinExample,
    exact: true,
  },
  {
    path: '/components/checkbox',
    component: CheckboxExample,
    exact: true,
  }
];
