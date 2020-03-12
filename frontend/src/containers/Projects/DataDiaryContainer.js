import React, { Component } from "react"
import ProjectsHeader from "../../components/Headers/ProjectsHeader"

class DataDiary extends Component {
	render(){
		return(
			<div className = "container">
				<ProjectsHeader />
				<h2>Data Diary</h2>
				<p>
					Developed an app that allows for the creation of personalized diary
					entries with customizable tags that can be associated with each entry.				
				</p>
				<p>
					The app was developed using a React framework to construct the frontend and all
					functional components. An API was used to connect it to the backend that utilizes
					Express for the routing and SQLite3 for database management.
				</p>
				<p>
					Through this project, I learned about the intricacies of properly connecting a fully built
					frontend to a backend and the versatility/creative ways to pass around information from
					component to component in React.
				</p>
			</div>
		)
	}
}

export default DataDiary