import React from "react";
import VSCodeContent from "../elements/VSCode/VSCodeContent";
import Default from "./Default";

const VSCode = () => {
	return (
		<Default height="90%" heading="Visual Studio Code" resizable={false}>
			<VSCodeContent/>
		</Default>
	)
}

export default VSCode
