import React from "react";
import styled from "styled-components";
import BodyContent from "../Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	border:none;
`
const Zone = () => {
	return (
		<BodyContent>
			<Iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0" frameborder="0" allow="accelerometer; autoplay;"></Iframe>
		</BodyContent>
	)
}

export default Zone
