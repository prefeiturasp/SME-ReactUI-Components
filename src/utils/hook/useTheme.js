import { merge } from 'lodash';

const Primary = '#F26419';
const PrimaryDark = '#ba4105';
const PrimaryLight = '#ff9c6b';

const Secondary = '#297373';
const SecondaryDark = '#126363';
const SecondaryLight = '#479e9e';

const Tertiary = '#2F4858';
const TertiaryDark = '#1f333f';
const TertiaryLight = '#516f82';

const Info = '#009dff';
const Info2 = '#009dff';
const Warning = '#fcaf3c';
const Success = '#37d11f';
const Alert = '#e647ff';
const Error = '#cc3300';

const Disabled = '#d8d2d2';

const Dark = '#230528';
const Light = '#ffff';
const Grey = '#6F777C';

const colors = {
  primary: {
    default: Primary,
    dark: PrimaryDark,
    light: PrimaryLight
  },
  secondary: {
    default: Secondary,
    dark: SecondaryDark,
    light: SecondaryLight
  },
  tertiary: {
    default: Tertiary,
    dark: TertiaryDark,
    light: TertiaryLight
  }, 
  light: {
    default: Light,
    dark: Light,
  },
  dark: {
    default: Dark,
    dark: Dark,
  },
  warning: { default: Warning },
  error: { default: Error },
  info: { default: Info },
  success: { default: Success },
  grey: { default: Grey }
}

const Support = {
  Colors: {
    Primary: Primary,
    PrimaryDark: PrimaryDark,
    PrimaryLight: PrimaryLight,
    Info: Info,
    Info2: Info2,
    Warning: Warning,
    Success: Success,
    Alert: Alert,
    Disabled: Disabled,
    NeutralDark: Dark,
    Light: Light
  },

  Button: {
    colors: colors
  },

  Collapse: {
    colors: colors
  },

  Tab: {
    colors: colors
  },
  
  Select: {
    colors: colors
  },

  Typography: {
    FontWeight: {
      Regular: 400,
      Bold: 700,
      ExtraBold: 900,
    },
    Size: {
      XBig: '40px',
      Big: '32px',
      Medium: '24px',
      Small: '16px',
      XSmall: '14px',
      XXSmall: '12px',
    },
    LineHeight: {
      Big: 8,
      Regular: 4,
      Small: 2,
    },
  },

  Icon: {
    colors: {
      primary: Primary,
      secondary: Secondary,
      tertiary: Tertiary,
      success: Success,
      error: Error,
      info: Info,
      warning: Warning,
      dark: Dark,
      light: Light
    },
    sizes: {
      xxs: '12px',
      xs: '16px',
      sm: '20px',
      md: '24px',
      lg: '32px'
    }
  },
  
  Spacing: {
    XXXS: '4px',
    XXS: '8px',
    XS: '16px',
    SM: '24px',
    MD: '32px',
    LG: '40px',
    XL: '48px',
    XXL: '56px',
    XXXL: '64px',
  },
};

const themes = {
  'themeSGP': merge({
    name: 'Tema SGP',
    Colors: {
      Primary: '#6933FF',
      PrimaryDark: '#490CF5',
      PrimaryLight: '#9670FF'
    }
  }, Support),
  'themeSGC': merge({
    name: 'Tema SGC',
    Colors: {
      Primary: '#602A2A',
      PrimaryDark: '#431E1E',
      PrimaryLight: '#864241'
    }
  }, Support),
  'themeSIGPAE': merge({
    name: 'Tema SIGPAE',
    Colors: {
      Primary: '#198459',
      PrimaryDark: '#0C6B45',
      PrimaryLight: '#20AA73',
    }
  }, Support),
}

function useTheme() {
  return themes;
}

export default useTheme;
