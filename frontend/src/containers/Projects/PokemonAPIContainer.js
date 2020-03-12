import React, { Component } from "react"
import ProjectsHeader from "../../components/Headers/ProjectsHeader"
import PokemonAPI from "../../components/Projects/PokemonAPI/PokemonAPI"

class PokemonAPIContainer extends Component {
	render(){
		return(
			<div className = "container">
				<ProjectsHeader />
				<PokemonAPI />
			</div>
		)
	}
}

export default PokemonAPIContainer