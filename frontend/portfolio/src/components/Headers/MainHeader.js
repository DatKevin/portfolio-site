import React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem } from "react-bootstrap"

const MainHeader = () => {
	return(
        <div>
            <h1>Navigation Bar</h1>
            <Nav>
                <Nav.Item as = "li">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as = "li">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item as = "li">
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default MainHeader