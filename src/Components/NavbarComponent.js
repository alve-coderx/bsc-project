import React, { useContext } from "react";
import DropdownNavbar from "./DropdownNavbar";
import LogoNavbar from "./LogoNavbar";
import { Navbar, Container, Row, Col, Nav, NavDropdown, NavItem, ButtonToolbar, DropdownButton } from "react-bootstrap";
import { ThemeContext } from "../Context/theme";
import {FaUserCircle} from 'react-icons/fa';
import logo from '../Assests/bnb.png'

export default function NavbarComponent() {
  const [{theme}] = useContext(ThemeContext)
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
            <Nav.Link href="#features"  style={{color :theme.color}}>Blockchain</Nav.Link>
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
