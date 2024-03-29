import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const _CardWithoutDomProps = ({ borderLeft, borderBottom, ...rest }) => <Card {...rest} />;

export const CardStyle = styled(_CardWithoutDomProps)`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #dadada;
	border-radius: 1px !important;
	position: relative;

	${(props) => 
		props.disabled ? `
		opacity: 0.3;
		`
	: undefined}

	${(props) =>
    props.rounded ?
    `
		border-radius: 6px !important;
	` : undefined}

  ${(props) =>
    props.animate ?
    `
		&:hover {
			box-shadow: none;
		}  
	` : undefined}

  ${(props) =>
    props.borderLeft ?
    `
		padding-left: 8px;
		border-left: 0;
		&:first-child {
				&::before {
				content: '';
				left: 0;
				width: 8px;
				position: absolute;
				height: 100%;
				background-color: ${props.theme?.Colors?.Primary};
				border-top-left-radius: 1px;
				border-bottom-left-radius: 1px;

				${
          props.rounded ?
          `
					border-top-left-radius: 6px;
					border-bottom-left-radius: 6px;
				` : undefined
        }

				z-index: 9999;
			}
		}
		
	` : undefined}

	${(props) =>
    props.borderBottom ?
    `
		padding-bottom: 8px;
		border-bottom: 0;
		&:first-child {
				&::before {
				content: '';
				bottom: 0;
				width: 100%;
				position: absolute;
				height: 8px;
				background-color: ${props.theme?.Colors?.Primary};
				border-top-left-radius: 1px;
				border-bottom-left-radius: 1px;

				${
          props.rounded ?
          `
					border-bottom-left-radius: 6px;
					border-bottom-right-radius: 6px;
				` : undefined
        }
				
				z-index: 9999;
			}
		}
	` : undefined}

  .ant-card-body {
    padding: 0;
    margin: 0;
  }
`;

export const CardHeadStyle = styled(Card)`
  padding: 0.5rem;
  font-weight: bold;
  margin: 0;

  border-bottom: 1px solid #dadada;
  border-radius: unset;
`;

export const CardBodyStyle = styled(Card)`
  padding: 0.5rem;
  margin: 0;
`;

export const CardFootStyle = styled(Card)`
  padding: 0.5rem;
  margin: 0.5rem 0px;
  background: transparent;
`;