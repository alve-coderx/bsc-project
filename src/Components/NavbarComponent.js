import React, { useContext } from "react";
import DropdownNavbar from "./DropdownNavbar";
import LogoNavbar from "./LogoNavbar";
import { Navbar, Container, Row, Col, Nav, NavDropdown, NavItem, ButtonToolbar, DropdownButton } from "react-bootstrap";
import { ThemeContext } from "../Context/theme";
import {FaUserCircle} from 'react-icons/fa';
import logo from '../Assests/bnb.png'

export default function NavbarComponent() {
  const [{theme,isDark}] = useContext(ThemeContext)
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor : theme.mainbg, color : theme.color}}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <LogoNavbar/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features"  style={{color :theme.color}}>Home</Nav.Link>
                <NavDropdown title="All Filters" id="basic-nav-dropdown" className={`${isDark ? "bscDroplight" : "bscDropdark"}`}>
                  <NavDropdown.Item href="#action/3.1" style={{color:"black"}}>Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" style={{color:"black"}}>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" style={{color:"black"}}>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" style={{color:"black"}}>
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
            <Nav.Link href="#features"  style={{color :theme.color}}>Validator</Nav.Link>
            <Nav.Link href="#features"  style={{color :theme.color}}>Tokens</Nav.Link>
            <Nav.Link href="#features"  style={{color :theme.color}}>Resources</Nav.Link>
            <Nav.Link href="#features"  style={{color :theme.color}}>More</Nav.Link>
            <Nav.Link href="#features"  style={{color :theme.color}}><FaUserCircle/> Sign In</Nav.Link>
            <Nav.Link href="#features"  style={{color :theme.color}}><img src={logo} style={{width:"25px"}}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
