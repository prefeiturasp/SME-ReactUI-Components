import { merge } from 'lodash';

const Support = {
  Colors: {
    Info: '#086397',
    Info2: '#10A3FB',
    Warning: '#B40C02',
    Success: '#297805',
    Alert: '#D06D12',
    Disabled: '#dadada',
    NeutralDark: '#42474A',
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
