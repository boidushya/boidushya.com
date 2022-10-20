import React, { Suspense, lazy } from "react";
import Default from "@components/Default";
import Loader from "@elements/Loader/Loader";
const TerminalContent = lazy(() =>
	import("@elements/Terminal/TerminalContent")
);

const VSCode = () => {
	return (
		<Default
			contextMenu={true}
			heading="boidushya@epicest: ~/Documents/portfolio — zsh — 100×35"
		    programName="Terminal"
		>
			<Suspense fallback={<Loader />}>
				{/* <Loader/> */}
				<TerminalContent />
			</Suspense>
		</Default>
	);
};

export default VSCode;
