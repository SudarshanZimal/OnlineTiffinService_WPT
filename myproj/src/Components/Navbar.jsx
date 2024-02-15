import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap"; // Import Button component
import { Link } from "react-router-dom";
import { fetchImage } from "./FetchImg";
import { LinkContainer } from "react-router-bootstrap";
import swaadGharLogo from "./Image/logoproject2.jpg"; // Import your logo image

//Import the useAuth0 hook from @auth0/auth0-react to get the methods
import { useAuth0 } from "@auth0/auth0-react";

//get all the neccessary methods from the useAuth0 Hook

function NavbarCode() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Link to="/">
            {/* Use the Image component to display the logo */}
            <img
              src={swaadGharLogo}
              alt="SwaadGhar Delights Logo"
              height={30}
            />
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Navbar.Brand href="#home">SwaadGhar Delights</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Nav.Link href="/About">About</Nav.Link>
              <LinkContainer to="/top-headlines">
                <Nav.Link>Top Headlines</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/all-news">
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
            </Nav>

            {/* <Link to="/login">
                <Button variant="danger" className="me-2">
                Sign In
                </Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Registration">
                <Button variant="danger" className="me-2">
                Sign Up
                </Button>
              </Link> */}
            {isAuthenticated && (
              <>
                <li>
                  <Link to="/mealplansection">
                    <Button variant="success" className="me-2">
                      Order Now
                    </Button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/CustomerRequestList">
                    <Button variant="primary" className="me-2">
                      Orders List
                    </Button>
                  </Link>
                </li>
                <li>
                  <p style={{ color: "white" }}>{user.name}</p>
                </li>
               
                 
                  
               
              </>
            )}

            {isAuthenticated ? (
              <li>
                <Button
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </Button>
              </li>
            ) : (
              <li>
                <Button onClick={() => loginWithRedirect()}>Log In</Button>
              </li>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCode;
