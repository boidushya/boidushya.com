import React from "react";
// eslint-disable-next-line
import styled from "styled-components";
import TerminalContent from "./TerminalContent";
import theme from "../../styles/theme";

const Wrapper = styled.div`
	display:flex;
	flex:1;
	max-width:100%;
	min-height: 32rem;
	height:100%;
	background: ${theme.bodyBg};
	border-radius: 0 0 0.3rem 0.3rem;
	border: 1px solid ${theme.bodyBorder};
	opacity: 0.95;
`

const BodyContent = () => {
	return (
		<Wrapper>
			<TerminalContent/>
		</Wrapper>
	)
}

export default BodyContent
