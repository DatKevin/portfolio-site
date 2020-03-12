import React, { Component } from "react"
import ProjectsHeader from "../../components/Headers/ProjectsHeader"
import DataDiary from "../../components/Projects/DataDiary/DataDiary"

class DataDiaryContainer extends Component {
	render(){
		return(
			<div className = "container">
				<ProjectsHeader />
				<DataDiary />
			</div>
		)
	}
}

export default DataDiaryContainer