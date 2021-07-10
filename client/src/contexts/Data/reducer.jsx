export const reducer = (state, action) => {
	switch (action.type) {
		case "SET":
			let commands = state.commands;
			commands.push(action.payload)
			return {
				commands: commands,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};
