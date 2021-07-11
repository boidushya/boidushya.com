import React, { useReducer } from "react";
import DataContext from "./DataContext";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

const DataProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setCommand = (command) =>
		dispatch({
			type: "SET",
			payload: command,
		});
	const setPath = (location) =>
		dispatch({
			type: "PATH",
			payload: location,
		});

	return (
		<DataContext.Provider
			value={{
				commands: state.commands,
				setCommand,
				path: state.path,
				setPath
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataProvider;
