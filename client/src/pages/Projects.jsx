import React from "react";
// eslint-disable-next-line
import styled from "styled-components";
import { firebase } from "../utils/initFirebase";

const db = firebase.database()

const Projects = () => {
	const date = new Date()
	const projectSchema = {
		name:"Test",
		date:date,
		image:"https://source.unsplash.com/random",
		otherMembers:[{
			"name":"epic gamer",
			"image":`https://source.unsplash.com/random/128x128/?sig=${Math.random()}`
		},{
			"name":"epic gamer",
			"image":`https://source.unsplash.com/random/128x128/?sig=${Math.random()}`
		}],
	}
	const testStructure = (e) => {
		e.preventDefault();
		const baseRef = db.ref("projects")
		const newBaseRef = baseRef.push()
		newBaseRef.set(projectSchema)

	}
	return (
		<>
			<button
				onClick={testStructure}
			>Test DB</button>
		</>
	)
}

export default Projects
