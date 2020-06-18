import styled from 'styled-components';

// Ant
import { Input } from 'antd';

export const InputWrapperStyle = styled.div`
  .label {
    display: block;
    font-weight: ${(props) => props.theme.Typography.FontWeight.Bold};
    font-size: ${(props) => props.theme.Typography.Size.XSmall};
    margin-bottom: ${(props) => props.theme.Spacing.XXXS};

    ${(props) =>
      props.required &&
      `
        &::after {
					content: '*';
					color: ${props.theme.Colors.warning};
					margin: 2px;
        }
    `}
  }

  .errorMessage {
    color: ${(props) => props.theme.Colors.warning};
    font-size: ${(props) => props.theme.Typography.Size.XXSmall};
    margin-top: ${(props) => props.theme.Spacing.XXXS};
    display: block;
  }
`;

export const InputStyle = styled(Input)`
  &.ant-input-affix-wrapper {
    .ant-input {
      min-height: 38px !important;
      height: 38px !important;

      &:not(.has-error) {
        &:focus,
        &:hover:not(:disabled) {
          border-color: ${(props) => props.theme.Colors.Primary};
          box-shadow: 0 0 0 2px #6933ff1c;
        }
      }
    }

    .ant-input:not(:first-child) {
      padding-left: 36px;
    }

    .ant-input-suffix,
    .ant-input-prefix {
      font-size: ${(props) => props.theme.Typography.Size.Small} !important;
    }

    &.has-error {
      .ant-input-suffix {
        color: ${(props) => props.theme.Colors.warning};
      }
    }
  }

  &.ant-input {
    height: 38px;

    &.has-error {
      border-color: ${(props) => props.theme.Colors.warning};
    }

    &::placeholder {
      font-size: ${(props) => props.theme.Typography.Size.XSmall};
      line-height: 22px;
      color: #a4a4a4;
    }

    &:focus,
    &:hover:not(:disabled) {
      border-color: ${(props) => props.theme.Colors.Primary};
      box-shadow: 0 0 0 2px #6933ff1c;
    }
  }
`;

export const InputSearchStyle = styled(Input.Search)`
  &.ant-input-affix-wrapper {
    .ant-input {
      min-height: 38px !important;
      height: 38px !important;

      &:focus,
      &:hover:not(:disabled) {
        border-color: ${(props) => props.theme.Colors.Primary};
        box-shadow: 0 0 0 2px #6933ff1c;
      }
    }

    .ant-input-suffix {
      font-size: ${(props) => props.theme.Typography.Size.Small} !important;
      color: ${(props) => props.theme.Colors.Primary};

      i svg {
        fill: ${(props) => props.theme.Colors.Primary};
        font-size: 22px;
      }
    }
  }

  &.ant-input {
    height: 38px;

    &.has-error {
      border-color: ${(props) => props.theme.Colors.warning};
    }

    &::placeholder {
      font-size: ${(props) => props.theme.Typography.Size.XSmall};
      line-height: 22px;
      color: #a4a4a4;
    }

    &:focus,
    &:hover:not(:disabled) {
      border-color: ${(props) => props.theme.Colors.Primary};
      box-shadow: 0 0 0 2px #6933ff1c;
    }
  }
`;
