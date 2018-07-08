import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	color: ${props => props.active ? 'pink' : '#fff'};
	font-size: 14px;
	font-family: "Roboto", sans-serif;
	font-weight: 300;
	line-height: 24px;
	padding-right: 22px;
	border-right: 1px dotted #969696;

	&:hover {
		color: #7d7d7d;
		text-decoration: none;
	}

	&:last-child {
		border-right: none;
	}
`

class Link extends React.Component {
	render() {
		return (
			<StyledLink href={this.props.link}> {this.props.text} </StyledLink>
		)
	}
}

export default Link