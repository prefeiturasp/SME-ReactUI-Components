import './index.css';
import 'antd/dist/antd.css';

// Default
import { ThemeProvider } from 'styled-components';

// Hooks
import useTheme from '~/utils/hook/useTheme';

// Components
import { 
    Button, 
    Icon, 
    Alert,
    Breadcrumb, 
    Collapse, 
    Spin, 
    Checkbox, 
    Radio,
    Select,
    Switch,
    Pagination,
    Modal,
    Tooltip,
    Card,
    Upload,
    Table,
    Typography,
    Tag,
    TextField,
    DatePicker,
    Tabs
} from './src/components';

export {
    Button,
    Icon,
    Alert,
    Breadcrumb,
    Collapse,
    Spin,
    Checkbox,
    Radio,
    Select,
    Switch,
    Pagination,
    Modal,
    Tooltip,
    Card,
    Upload,
    Table,
    Typography,
    Tag,
    TextField,
    DatePicker,
    Tabs,
    ThemeProvider,
    useTheme
}
