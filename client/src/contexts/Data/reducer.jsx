export const reducer = (state, action) => {
	switch (action.type) {
		case "SET":
			return {
				...state,
				data: action.payload.data,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
