import styled from 'styled-components';

// Ant
import { Steps } from 'antd';

export const StepperStyle = styled(Steps)`
  .ant-steps-item-process  .ant-steps-item-icon {
    background-color: ${(props) =>
      props.theme?.Stepper?.colors[props?.color]?.default} !important;
    border-color: ${(props) =>
      props.theme?.Stepper?.colors[props?.color]?.default} !important;
  }
  .ant-steps-item-wait {
    &:hover .ant-steps-item-icon {
				border-color: ${(props) =>
          props.theme?.Stepper?.colors[props?.color]?.default} !important;
				span {
						color: ${(props) =>
              props.theme?.Stepper?.colors[props?.color]?.default} !important;
				}
			}
		&:hover .ant-steps-item-content {
			.ant-steps-item-title,
			.ant-steps-item-description {
					color: ${(props) =>
            props.theme?.Stepper?.colors[props?.color]?.default} !important;
					}
			}
    }
    .ant-steps-item-icon {
      background-color: transparent !important;
      border-color: #6f777c !important;
    }
  }
  .ant-steps-item-finish {
    .ant-steps-item-icon {
      background-color: transparent !important;
      border-color: ${(props) =>
        props.theme?.Stepper?.colors[props?.color]?.default} !important;
      span {
        color: ${(props) =>
          props.theme?.Stepper?.colors[props?.color]?.default} !important;
      }
    }
    &:hover .ant-steps-item-icon {
      border-color: ${(props) =>
        props.theme?.Stepper?.colors[props?.color]?.default} !important;

      span {
        color: ${(props) =>
          props.theme?.Stepper?.colors[props?.color]?.default} !important;
      }
    }
		&:hover .ant-steps-item-content {
			.ant-steps-item-title,
			.ant-steps-item-description {
					color: ${(props) =>
            props.theme?.Stepper?.colors[props?.color]?.default} !important;
					}
			}
    }
  }
	
	.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-content>.ant-steps-item-title::after{
		background-color: ${(props) =>
      props.theme?.Stepper?.colors[props?.color]?.default} !important;
	}
	.ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-tail::after {
		background-color: ${(props) =>
      props.theme?.Stepper?.colors[props?.color]?.default} !important;
	}

	.ant-steps-item-disabled, .ant-steps-item-disabled:hover {
		.ant-steps-item-icon {
			border-color: #BFBFBF !important;
			span {
				color: #BFBFBF !important;
			}
		}
		.ant-steps-item-content {
			.ant-steps-item-title,
			.ant-steps-item-description {
				color: #BFBFBF !important;
			}
    }
	}
`;
