import React from "react";
import Default from "./Default";
import TerminalContent from "../elements/Terminal/TerminalContent";

const VSCode = () => {
	return (
		<Default contextMenu={true} heading="boidushya@epicest: ~/Documents/portfolio — zsh — 100×35">
			<TerminalContent/>
		</Default>
	)
}

export default VSCode
