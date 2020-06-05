import ButtonExample from '~/examples/Button';
import AlertExample from '~/examples/Alert';
import SpinExample from '~/examples/Spin';

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
];
