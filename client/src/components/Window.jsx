import React from "react";
import styled from "styled-components";
import HeadingBar from "../elements/Window/HeadingBar";
import BodyContent from "../elements/Window/BodyContent";
import bg from "../static/bg5.jpg";
import theme from "../styles/theme";

const Wrapper = styled.div`
	display: grid;
	place-items:center;
	min-height: 100vh;
	background: url(${bg}) no-repeat center center;
	background-size: cover;
`

const Container = styled.div`
	width: 75%;
	border-radius:0.6rem 0.6rem 0.3rem 0.3rem;
	box-shadow: ${theme.windowShadow} 0px 1px 4px;
`

const Terminal = () => {
	return (
		<Wrapper>
			<Container>
				<HeadingBar/>
				<BodyContent/>
			</Container>
		</Wrapper>
	)
}

export default Terminal
