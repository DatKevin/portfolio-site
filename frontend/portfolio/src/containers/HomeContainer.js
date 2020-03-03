import React from "react"
import HomeBoxContainer from "./HomeBoxContainer"
import Bio from "../components/AboutMe/Bio"

const Home = () => {
	return(
		<div className = "container">
			<HomeBoxContainer />
			<Bio />
		</div>
	)
}

export default Home