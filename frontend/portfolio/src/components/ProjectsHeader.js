import React from "react"
import { Link } from "react-router-dom"

const ProjectsHeader = () => {
	return (
		<header>
			<h2>Projects</h2>
			<nav>
				<Link to = {"/projects/doggame"}> A Simple Dog Game </Link>
				<Link to = {"/projects/pokemonapi"}> Pokemon API </Link>
				<Link to = {"/projects/datadiary"}> Data Diary </Link>
			</nav>
		</header>
	)
}

export default ProjectsHeader