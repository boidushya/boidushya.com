import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
// eslint-disable-next-line
import styled from "styled-components";
import colors from "./styles/colors";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";

const App = () => {
	return (
		<ThemeProvider theme={colors}>
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
		</ThemeProvider>
	)
}

export default App
