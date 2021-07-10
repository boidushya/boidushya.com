import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line
import styled, { css, keyframes } from "styled-components";
import theme from "../../styles/theme";

const Wrapper = styled.div`
	font-family: "Hack", monospace;
	color:${theme.bodyFont1};
	padding: 0.2rem 0.4rem;
	line-height: 1.5;
	font-smooth: always;
	width: 100%;
`

//eslint-disable-next-line
const Line = styled.p``

const Input = styled.input`
	font-family:inherit;
	background: inherit;
	font-size: inherit;
	color: inherit;
	border: none;
	outline: none;
	caret-color: transparent;
	width:0;
	max-width: 100%;
`

const InputContainer = styled.span`
	display: flex;
`

const blink = keyframes`
	from, to {
		background: ${theme.bodyFont1};
	}

	50% {
		background: transparent;
	}
`;

const typingMixin = css`
	animation: ${blink} 0.8s step-end infinite;
`

const Cursor = styled.div`
	width:1ch;
	background: ${theme.bodyFont1};
	margin: 0.1rem 0.3rem;
	z-index:2;
	${props=>!props.typing&&typingMixin}
`

const Label = styled.label`
	color: ${theme.labelColor}
`

const InputLine = () => {
	const [val, setVal] = useState("");
	const [typing, setTyping] = useState(false);
	const inputRef = useRef();
	const cursorRef = useRef();
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	useEffect(() => {
		const timeoutId = setTimeout(() =>
			setTyping(false)
		, 200);
		return () => clearTimeout(timeoutId);
	}, [typing]);
	return (
		<InputContainer>
			<Label htmlFor="input">$boidushya~&nbsp;</Label>
			<Input
				id="input"
				type="text"
				ref={inputRef}
				value={val}
				onBlur={(e)=>{
					e.target.focus()
				}
				}
				onKeyDown={(e)=>{
					let ctrlCheck = false
					if(e.ctrlKey){
						ctrlCheck = true;
					}
					let currentPos = parseFloat(cursorRef.current.style.transform.slice(11));
					let textLength = inputRef.current.value.length
					let checkPos = Math.abs(Math.floor(currentPos))
					// console.log(checkPos,textLength);
					switch(e.key){
						case "ArrowLeft":
							if(checkPos<=textLength && !ctrlCheck){
								setTyping(true);
								cursorRef.current.style.transform = `translateX(${currentPos-1}ch)`
							}
							else{
								e.preventDefault();
							}
							break;
						case "ArrowRight":
							if(checkPos!==1 && !ctrlCheck){
								setTyping(true);
								cursorRef.current.style.transform = `translateX(${currentPos+1}ch)`
							}
							else{
								e.preventDefault();
							}
							break;
						default:
							break;
					}
				}}
				onChange = {(e)=>{
					e.preventDefault()
					setVal(e.target.value);
					setTyping(true);
					e.target.style.width = e.target.value.length + "ch";
				}}
				spellCheck={false}
				autoComplete="off"
				autoCorrect="off"
			/>
			<Cursor
				ref={cursorRef}
				typing={typing}
				style={{
					transform: "translateX(-0.5ch)"
				}}
			/>
		</InputContainer>
	)
}

const TerminalContent = () => {
	return (
		<Wrapper>
			<InputLine />
		</Wrapper>
	)
}

export default TerminalContent
