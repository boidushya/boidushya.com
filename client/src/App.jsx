import React from "react";
import { ThemeProvider } from "styled-components";
// eslint-disable-next-line
import styled from "styled-components";
import colors from "./styles/colors";
import Homepage from "./pages/Homepage";
import DataProvider from "./contexts/Data/DataProvider";

const App = () => {
	return (
		<ThemeProvider theme={colors}>
			<DataProvider>
				<Homepage/>
			</DataProvider>
		</ThemeProvider>
	)
}

export default App
