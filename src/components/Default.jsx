import React from "react";
import styled from "styled-components";
import HeadingBar from "@elements/Window/HeadingBar";
import Draggable from 'react-draggable';
import bg from "@static/bg5small.jpg";
import theme from "@styles/theme";

const Wrapper = styled.div`
	display: grid;
	place-items:center;
	min-height: 100vh;
	background: url(${bg}) no-repeat center center;
	background-size: cover;
	overflow: hidden;
`

const Container = styled.div`
	width: 75%;
	border-radius:0.6rem 0.6rem 0.3rem 0.3rem;
	box-shadow: ${theme.windowShadow} 0px 1px 4px;
	resize:${props=>props.resizable?`both`:`none`};
	overflow:hidden;
	min-width: 70%;
	min-height:25%;
	max-height: 90%;
	max-width: 80%;
	backdrop-filter: blur(1rem);
	background: ${theme.bodyBgWithOpacity};
	${props=>props.height&&`height: ${props.height}`}
`

const Default = (props) => {
	// const { setCommand, setPath } = useContext(DataContext);
	let resizable = false;
	if(props.resizable === undefined){
		resizable = true;
	}
	const BOUND = 512
	return (
		<Wrapper>
			<Draggable
				bounds={{
					top: -128,
					left: -BOUND,
					right: BOUND,
					bottom: BOUND
				}}
				handle=".heading-bar"
			>
				<Container
					height={props.height}
					resizable={resizable}
					onContextMenu={(e)=>{
						!props.contextMenu&&e.preventDefault()
					}}
				>
					<HeadingBar altClassName="heading-bar" heading={props.heading}/>
					{props.children}
				</Container>
			</Draggable>
		</Wrapper>
	)
}

export default Default
