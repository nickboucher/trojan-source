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
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionProgress() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col md="6">
              <div className="title">
                <h3>Progress Bar</h3>
                <br />
              </div>
              <Progress
                max="100"
                value="25"
                barClassName="progress-bar-success"
              />
              <br />
              <Progress max="100" value="50" barClassName="progress-bar-info" />
              <br />
              <Progress
                max="100"
                value="100"
                barClassName="progress-bar-danger"
              />
              <br />
              <Progress multi>
                <Progress bar max="100" value="15" />
                <Progress
                  bar
                  barClassName="progress-bar-success"
                  max="100"
                  value="30"
                />
                <Progress
                  bar
                  barClassName="progress-bar-warning"
                  max="100"
                  value="20"
                />
              </Progress>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Pagination</h3>
                <br />
              </div>
              <nav aria-label="Page navigation example">
                <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      aria-label="Previous"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i aria-hidden={true} className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      aria-label="Next"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i aria-hidden={true} className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
              <br />
              <nav aria-label="...">
                <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      Previous
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3 <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="6">
              <div className="title">
                <h3>Navigation Tabs</h3>
              </div>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Messages
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient. With a smooth metal surface that
                    seamlessly meets the new Retina HD display.
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>Here is your profile.</p>
                </TabPane>
                <TabPane tabId="3">
                  <p>Here are your messages.</p>
                </TabPane>
              </TabContent>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Labels</h3>
              </div>
              <label className="label label-default mr-1">Default</label>
              <label className="label label-primary mr-1">Primary</label>
              <label className="label label-info mr-1">Info</label>
              <label className="label label-success mr-1">Success</label>
              <label className="label label-warning mr-1">Warning</label>
              <label className="label label-danger">Danger</label>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionProgress;
