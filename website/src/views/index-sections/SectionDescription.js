import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDescription() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Some Vulnerabilities are Invisible</h2>
              <p className="description">
                Adversaries can encode source code files to introduce targeted vulnerabilities that are not visible to human reviewers.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDescription;
