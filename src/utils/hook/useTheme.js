import React from 'react';
import { merge } from 'lodash';

import { Support } from '~/themes';

function useTheme(theme) {
  return merge(theme, Support);
}

export default useTheme;
