import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import "../../styles/loader.scss";

const LoadingContainer = styled.div`
	width: 100%;
	height: 100%;
	background: ${theme.bodyBg};
`

const Loader = () => {
	return (
		<LoadingContainer>
			<div class="spinner center">
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
				<div class="spinner-blade"></div>
			</div>
		</LoadingContainer>
	)
}

export default Loader
