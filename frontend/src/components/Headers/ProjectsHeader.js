import React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem } from "react-bootstrap"

const ProjectHeader = () => {
	return(
        <div className = "header">
            <Nav>
                <Nav.Item as = "li">
                    <Nav.Link href="/projects/doggame">A Simple Dog Game</Nav.Link>
                </Nav.Item>
                <Nav.Item as = "li">
                    <Nav.Link href="/projects/datadiary">Data Diary</Nav.Link>
                </Nav.Item>
                <Nav.Item as = "li">
                    <Nav.Link href="/projects/pokemonapi">Pokemon API</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default ProjectHeader