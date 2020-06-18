import styled from 'styled-components';

// Ant
import { Card } from 'antd';

export const CardStyle = styled(Card)`
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #dadada;
	border-radius: 2px !important;
	position: relative;

  ${(props) =>
    props.animate &&
    `
		&:hover {
			box-shadow: none;
		}  
	`}

  ${(props) =>
    props.borderLeft &&
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
				background-color: ${props.theme.primary};
				border-top-left-radius: 1px;
				border-bottom-left-radius: 1px;
				z-index: 9999;
			}
		}
		
	`}

	${(props) =>
    props.borderBottom &&
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
				background-color: ${props.theme.primary};
				border-top-left-radius: 1px;
				border-bottom-left-radius: 1px;
				z-index: 9999;
			}
		}
	`}

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
  margin: 0;

  ${(props) => console.log(props)}
  ${(props) =>
    typeof props.children === 'object' &&
    !props?.children?.length &&
    `
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;

		a {
			color: #42474A;
			font-weight: bold;

			&:hover {
				color: gray;
			}
		}
	`}
`;