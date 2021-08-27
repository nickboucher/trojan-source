/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

// core components

function SectionNavigation() {
  return (
    <>
      <div className="section section-navigation">
        <Container className="tim-container">
          <div className="title">
            <h3>Navigation Areas</h3>
          </div>
        </Container>
        <div id="navbar">
          <div
            className="navigation-example"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ilya-yakover.jpg").default + ")",
            }}
          >
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Primary Color
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right burger-menu"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-primary">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-compass-05"
                        />
                         Discover
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-single-02"
                        />
                         Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-settings-gear-65"
                        />
                         Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-info" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Info Color
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-info"
                  data-toggle="collapse"
                  id="navbar-info"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-info">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Discover
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-success" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Success Color
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={true}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-success"
                  data-toggle="collapse"
                  id="navbar-success"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse
                  navbar
                  style={{}}
                  toggler="#navbar-success"
                >
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-compass-05"
                        />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-single-02"
                        />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="nc-icon nc-settings-gear-65"
                        />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-warning" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Warning Color
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-warning"
                  data-toggle="collapse"
                  id="navbar-warning"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-warning">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="fa fa-facebook-official"
                        />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i aria-hidden={true} className="fa fa-twitter" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i aria-hidden={true} className="fa fa-google-plus" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i aria-hidden={true} className="fa fa-instagram" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="bg-danger" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Danger Color
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={true}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-danger"
                  data-toggle="collapse"
                  id="navbar-danger"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse
                  navbar
                  style={{}}
                  toggler="#navbar-danger"
                >
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="fa fa-facebook-official"
                        />
                        Share
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i aria-hidden={true} className="fa fa-twitter" />
                        Tweet
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i aria-hidden={true} className="fa fa-pinterest" />
                        Pin
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            <Navbar className="navbar-transparent pt-0" expand="lg">
              <Container>
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Transparent
                </NavbarBrand>
                <button
                  aria-controls="navbarNav"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler-right"
                  data-target="#navbar-transparent"
                  data-toggle="collapse"
                  id="navbar-transparent"
                  type="button"
                >
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                  <span className="navbar-toggler-bar" />
                </button>
                <UncontrolledCollapse navbar toggler="#navbar-transparent">
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i
                          aria-hidden={true}
                          className="fa fa-facebook-official"
                        />
                        Facebook
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i aria-hidden={true} className="fa fa-twitter" />
                        Twitter
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i aria-hidden={true} className="fa fa-instagram" />
                        Instagram
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default SectionNavigation;
