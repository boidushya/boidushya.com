import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
// eslint-disable-next-line
import styled from "styled-components";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route
					path="/about"
					exact
					component={About}
				/>
				<Route
					path="/projects"
					exact
					component={Projects}
				/>
				<Route
					path="/"
					exact
					component={Homepage}
				/>
			</Switch>
		</Router>
	)
}

export default App
