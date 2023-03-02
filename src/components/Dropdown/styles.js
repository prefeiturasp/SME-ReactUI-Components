import React from 'react';

import styled from 'styled-components';

import { Icon } from '~/components';

import { Dropdown, ConfigProvider } from 'antd';

export const DropdownStyle = styled(Dropdown.Button)`
    font-family: 'Roboto', sans-serif !important;
    overflow: hidden;
    pointer-events: initial !important;

    .ant-btn:disabled i{
        color: unset !important;
    }

    .ant-btn-group {
        background: red;
    }

    &:disabled {
        background: transparent !important;
        border-color: ${(props) => props.theme?.Colors?.Disabled} !important;
        color: ${(props) => props.theme?.Colors?.Disabled} !important;
    }

    .ant-btn-primary {
        background-color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;
        border-color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;

        &:hover:not(:disabled) {
            background-color: ${(props) => props.theme?.Button.colors[props.color]?.dark}  !important;
        }

        &:disabled {
            background: transparent !important;
            border-color: ${(props) => props.theme?.Colors?.Disabled} !important;
            color: ${(props) => props.theme?.Colors?.Disabled} !important;
        }
        &:not([disabled]):before{
            background-color: ${(props) => props.theme?.Colors?.Light} !important;
        }
        i {
            color: ${(props) => props.theme?.Colors?.Light} !important;
        }
    }

    .ant-btn-text {
        color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;

        &:disabled{
            color: ${(props) => props.theme?.Colors?.Disabled} !important;
            border: unset !important;
        }
    }

    .ant-btn-outlined:not(:disabled) {
        background-color: transparent !important;
        color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;
        border-color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;

        &:hover:not(:disabled) {
            background-color: ${(props) => props.theme?.Button.colors[props.color]?.dark}66 !important;
            color: ${(props) => props.theme?.Button.colors[props.color]?.dark} !important;
            border-color: ${(props) => props.theme?.Button.colors[props.color]?.dark} !important;
        }
        &:not(:disabled):focus-visible{
            background-color: transparent !important;
            color: ${(props) => props.theme?.Colors[props.color]} !important;
            outline: unset;
        }
    }
`;

export const DropdownButttonStyle = styled(Dropdown.Button)`

`;
export const ArrowDown = <Icon type="solid" icon="fa-chevron-down" size="xs"/>;
export const DropdownIconLeft = ({icon}) => <Icon type="solid" style={{paddingRight: 12}} icon={icon} size="xs"/>;

