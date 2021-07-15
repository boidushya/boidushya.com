import React from "react";
// eslint-disable-next-line
import styled from "styled-components";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Window from "@components/Window";
import Danger from "@components/Danger";
import VSCode from "@components/VSCode";
import Linux from "@components/Linux";
import Resume from "@components/Resume";
import Git from "@components/Git";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route
					path="/"
					exact
					component={Window}
				/>
				<Route
					path="/danger-zone"
					exact
					component={Danger}
				/>
				<Route
					path="/vscode"
					exact
					component={VSCode}
				/>
				<Route
					path="/qemu"
					exact
					component={Linux}
				/>
				<Route
					path="/resume"
					exact
					component={Resume}
				/>
				<Route
					path="/git"
					exact
					component={Git}
				/>
			</Switch>
		</Router>
	)
}

export default Routes
