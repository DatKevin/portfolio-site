import React, { Component } from "react"
import ProjectsHeader from "../../components/Headers/ProjectsHeader"

class ASDGContainer extends Component {
	render(){
		return(
			<div className = "container">
				<ProjectsHeader />
				<h2>A Simple Dog Game</h2>
				<p>
					​Created an idle game where the game starts off simply with a
					single button and a goal of becoming “The Best Dog.” Over time, the player will unlock new
					resources and ways to automate resource generation as the game evolves. The players will
					unlock secrets and will have to manage their resources carefully.
				</p>
				<p>
					The app does not use any framework and is created using JavaScript and DOM
					manipulation to dynamically add and change the HTML/CSS based on game progression.
				</p>
				<p>
					Through this game, I built the foundation of understanding of what goes on underneath
					a framework and how Javascript can dynamically make changes to a page’s HTML/CSS.
					This results in a simple, yet complex game of interlocking mechanics with discoverable
					secrets and mysteries to solve.
				</p>
			</div>
		)
	}
}

export default ASDGContainer