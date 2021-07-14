import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Wrapper = styled.div`
	display:flex;
	flex:1;
	max-width:100%;
	min-height: 32rem;
	height:100%;
	background: ${theme.bodyBg};
	border-radius: 0 0 0.3rem 0.3rem;
	opacity: 0.85;
	overflow:hidden;
`

const Iframe = styled.iframe`
	width: 100%;
	height:95%;
	border:none;
`

const VSCodeContent = () => {
	return (
		<Wrapper>
			<Iframe src="https://github1s.com/Boidushya/boidushya.com" frameBorder="0" title="VsCode"></Iframe>
		</Wrapper>
	)
}

export default VSCodeContent
