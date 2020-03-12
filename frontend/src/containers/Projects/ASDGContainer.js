import React, { Component } from "react"
import ProjectsHeader from "../../components/Headers/ProjectsHeader"
import ASDG from "../../components/Projects/ASDG/ASDG"

class ASDGContainer extends Component {
	render(){
		return(
			<div className = "container">
				<ProjectsHeader />
				<ASDG />
			</div>
		)
	}
}

export default ASDGContainer