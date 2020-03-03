import React from "react"
import { Switch, Route } from "react-router-dom"
import HomeContainer from "../containers/HomeContainer"
import ProjectsContainer from "../containers/ProjectsContainer"
import HomeBoxContainer from "../containers/HomeBoxContainer"
import ResumeContainer from "../containers/ResumeContainer"
import ASDGContainer from "../containers/ASDGContainer"
import PokemonAPIContainer from "../containers/PokemonAPIContainer"
import DataDiaryContainer from "../containers/DataDiaryContainer"


export default (
	<Switch>
		<Route exact path = "/" component = { HomeContainer } />
		<Route exact path = "/projects" component = { ProjectsContainer } />
		<Route exact path = "/resume" component = { ResumeContainer } />		
		<Route exact path = "/projects/doggame" component = { ASDGContainer } />		
		<Route exact path = "/projects/pokemonapi" component = { PokemonAPIContainer } />		
		<Route exact path = "/projects/datadiary" component = { DataDiaryContainer } />
	</Switch>
)