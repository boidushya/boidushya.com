import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	border: none;
`;

const ResumeContent = () => {
	return (
		<BodyContent>
			<Iframe
				src="https://res.cloudinary.com/boidu/image/upload/v1697223479/Resume.pdf"
				frameBorder="0"
				title="Boidushya's Resume"
			></Iframe>
		</BodyContent>
	);
};

export default ResumeContent;
