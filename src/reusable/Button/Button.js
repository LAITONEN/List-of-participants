import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs({
	backgroundColor: props => {
		if (props.width === '120px') {
			
		}
	}
})`
	background-color: ${props => props.disabled ? props.backColor : "rgb(237, 237, 237)"};
	border: none;
	border-radius: 0px;
	color: ${props => props.disabled ? props.color : "rgb(117, 117, 117)"};
	font-size: 1.6rem;
	font-weight: 500;
	height: 4rem;
	&:hover {
		color: ${props => props.color};
		background-color: ${props => props.backColor};
		cursor: pointer;
	}
	margin: 1.6rem;
	outline: none;
	transition: all 0.2s ease-in-out;
	width: ${props => props.width || '160px'};
`;

const Button = ({ backColor, color, disabled, onClick, title, width }) => {
    return (
		<StyledButton
			backColor={backColor}
			color={color}
			disabled={disabled}
			onClick={onClick}
			width={width}
		>{title}
		</StyledButton>
        
    );
};

export default Button;