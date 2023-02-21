import { merge } from 'lodash';

const Support = {
  Colors: {
    primary: '#6933FF',
    Primary: '#6933FF',
    PrimaryDark: '#490CF5',
    PrimaryLight: '#9670FF',

    Info: '#086397',
    Info2: '#10A3FB',
    Warning: '#B40C02',
    Success: '#297805',
    Alert: '#D06D12',
    Disabled: '#dadada',
    NeutralDark: '#42474A',
    Light: '#ffff'
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
      primary: '#6933FF',
      secondary: '#32fff1',
      tertiary: '#0ad8cb',
      success: '#297805',
      error: '#ff0000',
      info: '#086397',
      warning: '#ffbb00',
      dark: '#000',
      light: '#ffff'
    }
  },

  IconSize: {
    'xs': '16px',
    'sm': '20px',
    'md': '24px',
    'lg': '32px'
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
