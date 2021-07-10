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

	return (
		<DataContext.Provider
			value={{
				commands: state.commands,
				setCommand,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataProvider;
