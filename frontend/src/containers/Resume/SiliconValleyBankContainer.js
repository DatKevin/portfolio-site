import React, { Component } from "react"
import ResumeHeader from "../../components/Headers/ResumeHeader"
import SiliconValleyBank from "../../components/Resume/SiliconValleyBank/SiliconValleyBank"

class SiliconValleyBankContainer extends Component {
	render(){
		return(
			<div className = "container">
				<ResumeHeader />
				<SiliconValleyBank />
			</div>
		)
	}
}

export default SiliconValleyBankContainer