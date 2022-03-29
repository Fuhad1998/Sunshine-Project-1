import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Global IELTS Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/services">
              Services
            </Link>
            <Link className="nav-link" to="/expertise">
              Expertise
            </Link>
            
          </Nav>
          <Nav>
            <Link className="nav-link" to="/achievement">
              Achievement
            </Link>
            <span className="nav-link">{user.displayName}</span>

            {user.email ? (
              <button onClick={logout}>Log-Out</button>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
