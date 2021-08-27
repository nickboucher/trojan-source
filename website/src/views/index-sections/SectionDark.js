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
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Completed with examples</h2>
              <p className="description">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. More importantly, looking at them will give you a picture of
                what you can built with this powerful kit.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
