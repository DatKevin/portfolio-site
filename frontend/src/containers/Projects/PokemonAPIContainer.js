import React, { Component } from "react"
import ProjectsHeader from "../../components/Headers/ProjectsHeader"

class PokemonAPI extends Component {
	render(){
		return(
			<div className = "container">
				<ProjectsHeader />
				This is the Home PokemonAPI
			</div>
		)
	}
}

export default PokemonAPI