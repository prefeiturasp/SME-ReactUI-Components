import React from 'react';
import t from 'prop-types';

// Styles
import { InputWrapperStyle, InputSearchStyle } from '../styles';

function TextFieldSearch({ enterButton, onSearch, loading }) {
  return (
    <InputWrapperStyle>
      <InputSearchStyle
        enterButton={enterButton}
        onSearch={onSearch}
        loading={loading}
      />
    </InputWrapperStyle>
  );
}

TextFieldSearch.propTypes = {
  enterButton: t.func,
  onSearch: t.func,
  loading: t.bool,
};

TextFieldSearch.defaultProps = {
  loading: false,
};

export default TextFieldSearch;
