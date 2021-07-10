import commands from "./commands.json";
import styled from "styled-components";
import theme from "../styles/theme";

const RedErrorText = styled.span`
	color: ${theme.bodyFont2};
`

const getErrorCommand = (command) => {
	return (
		<>
			zsh: command not found: <RedErrorText>{command}</RedErrorText>
		</>
	)
}

const getResponse = (data) => {
	if(commands.hasOwnProperty(data)){
		return commands[data]
	}
	else{
		return getErrorCommand(data)
	}
}

export default getResponse