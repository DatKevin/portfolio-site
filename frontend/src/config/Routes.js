import React from "react"
import { Switch, Route } from "react-router-dom"
import HomeContainer from "../containers/HomeContainer"
import ProjectsContainer from "../containers/Projects/ProjectsContainer"
import HomeBoxContainer from "../containers/HomeBoxContainer"
import ResumeContainer from "../containers/Resume/ResumeContainer"
import ASDGContainer from "../containers/Projects/ASDGContainer"
import PokemonAPIContainer from "../containers/Projects/PokemonAPIContainer"
import DataDiaryContainer from "../containers/Projects/DataDiaryContainer"
import AppleContainer from "../containers/Resume/AppleContainer"
import SiliconValleyBankContainer from "../containers/Resume/SiliconValleyBankContainer"
import GeneralAssemblyContainer from "../containers/Resume/GeneralAssemblyContainer"


export default (
	<Switch>
		<Route exact path = "/" component = { HomeContainer } />
		<Route exact path = "/projects" component = { ProjectsContainer } />
		<Route exact path = "/resume" component = { ResumeContainer } />		
		<Route exact path = "/projects/doggame" component = { ASDGContainer } />		
		<Route exact path = "/projects/pokemonapi" component = { PokemonAPIContainer } />		
		<Route exact path = "/projects/datadiary" component = { DataDiaryContainer } />
		<Route exact path = "/resume/ga" component = { GeneralAssemblyContainer } />
		<Route exact path = "/resume/svb" component = { SiliconValleyBankContainer } />
		<Route exact path = "/resume/apple" component = { AppleContainer } />
	</Switch>
)