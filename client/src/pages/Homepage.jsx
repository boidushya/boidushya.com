import React from "react";
// eslint-disable-next-line
import styled from "styled-components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Window from "../components/Window";

const Homepage = () => {
	return (
		<Router>
			<Switch>
				<Route
					path="/"
					exact
					component={Window}
				/>
			</Switch>
		</Router>
	)
}

export default Homepage
