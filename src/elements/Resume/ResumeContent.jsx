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

const ResumeContent = () => {
	return (
		<Wrapper>
			<Iframe src="https://firebasestorage.googleapis.com/v0/b/boidushya.appspot.com/o/Boidushya's%20Resume.pdf?alt=media" frameBorder="0" title="Boidushya's Resume"></Iframe>
		</Wrapper>
	)
}

export default ResumeContent
