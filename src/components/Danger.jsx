import React, { Suspense, lazy } from "react";
import Loader from "@elements/Loader/Loader";
import Default from "@components/Default";

const Zone = lazy(() => import("@elements/Danger/Zone"));

const VSCode = () => {
	return (
		<Default heading="Rick Astley - Never Gonna Give You Up (Official Music Video)">
			<Suspense fallback={
				<Loader/>
			}>
				<Zone/>
			</Suspense>
		</Default>
	)
}

export default VSCode
