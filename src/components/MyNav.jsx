import { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src={this.props.brend}
                width="60"
                height="50"
                className="d-inline-block align-top m-0"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="active">
                  About
                </Nav.Link>
                <Nav.Link href="#browse" className="active">
                  Browse
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default MyNav;
