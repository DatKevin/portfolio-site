import React, { Component } from "react"
import ResumeHeader from "../../components/Headers/ResumeHeader"
import GeneralAssembly from "../../components/Resume/GeneralAssembly/GeneralAssembly"

class GeneralAssemblyContainer extends Component {
	render(){
		return(
			<div className = "container">
				<ResumeHeader />
				<GeneralAssembly />
			</div>
		)
	}
}

export default GeneralAssemblyContainer