import React from "react"
import { Link } from "react-router-dom"
import { Nav, Navbar, NavItem } from "react-bootstrap"

const ResumeHeader = () => {
	return(
        <div>
            <h3>Resume Navbar</h3>
            <Nav>
                <Nav.Item as = "li">
                    <Nav.Link href="/resume/ga">General Assembly</Nav.Link>
                </Nav.Item>
                <Nav.Item as = "li">
                    <Nav.Link href="/resume/apple">Apple</Nav.Link>
                </Nav.Item>
                <Nav.Item as = "li">
                    <Nav.Link href="/resume/svb">Silicon Valley Bank</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default ResumeHeader