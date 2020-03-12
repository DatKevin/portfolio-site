import React, { Component } from "react"
import ResumeHeader from "../../components/Headers/ResumeHeader"
import Apple from "../../components/Resume/Apple/Apple"

class AppleContainer extends Component {
	render(){
		return(
			<div className = "container">
				<ResumeHeader />
				<Apple />
			</div>
		)
	}
}

export default AppleContainer