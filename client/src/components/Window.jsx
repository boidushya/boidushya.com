import React from "react";
import styled from "styled-components";
import HeadingBar from "../elements/Window/HeadingBar";
import BodyContent from "../elements/Window/BodyContent";

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 4fr;
`

const Terminal = () => {
	return (
		<Wrapper>
			<HeadingBar/>
			<BodyContent/>
		</Wrapper>
	)
}

export default Terminal
