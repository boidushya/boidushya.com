import React, { useReducer } from "react";
import DataContext from "./DataContext";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

const DataProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setData = (data) =>
		dispatch({
			type: "SET",
			payload: data,
		});

	return (
		<DataContext.Provider
			value={{
				data: state.data,
				setData,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataProvider;
