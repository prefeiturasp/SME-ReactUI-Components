import '../index.css';
import 'antd/dist/antd.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

addDecorator(withPropsTable);