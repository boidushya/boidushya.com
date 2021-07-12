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
	border:none;
`
const Zone = () => {
	return (
		<Wrapper>
			<Iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></Iframe>
		</Wrapper>
	)
}

export default Zone
