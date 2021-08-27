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

function SectionTypography() {
  return (
    <>
      <Container className="tim-container">
        <div className="title">
          <h3>Typography</h3>
        </div>
        <div id="typography">
          <Row>
            <div className="typography-line">
              <h1>
                <span className="note">Header 1</span>
                Thinking in textures
              </h1>
            </div>
            <div className="typography-line">
              <h2>
                <span className="note">Header 2</span>
                Thinking in textures
              </h2>
            </div>
            <div className="typography-line">
              <h3>
                <span className="note">Header 3</span>
                Thinking in textures
              </h3>
            </div>
            <div className="typography-line">
              <h4>
                <span className="note">Header 4</span>
                Thinking in textures
              </h4>
            </div>
            <div className="typography-line">
              <h5>
                <span className="note">Header 5</span>
                Thinking in textures
              </h5>
            </div>
            <div className="typography-line">
              <h6>
                <span className="note">Header 6</span>
                Thinking in textures
              </h6>
            </div>
            <div className="typography-line">
              <p>
                <span className="note">Paragraph</span>
                Thinking in textures
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Quote</span>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
                <br />
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div className="typography-line">
              <span className="note">Muted text</span>
              <p className="text-muted">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Primary text</span>
              <p className="text-primary">
                Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Success text</span>
              <p className="text-success">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Info text</span>
              <p className="text-info">
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Warning text</span>
              <p className="text-warning">
                Etiam porta sem malesuada magna mollis euismod.
              </p>
            </div>
            <div className="typography-line">
              <span className="note">Danger text</span>
              <p className="text-danger">
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div className="typography-line">
              <h2>
                <span className="note">Small tag</span>
                Header with small subtitle <br />
                <small>".small" is a tag for the headers</small>
              </h2>
            </div>
          </Row>
        </div>
        <br />
        <div id="images">
          <Container>
            <div className="title">
              <h3>Images</h3>
            </div>
            <Row>
              <Col md="3" sm="6">
                <h4 className="images-title">Rounded Image</h4>
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("assets/img/uriel-soberanes.jpg").default}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={
                        require("assets/img/faces/joe-gardner-2.jpg").default
                      }
                    />
                  </div>
                  <p>Sonia Green</p>
                </div>
              </Col>
              <Col className="mr-auto ml-auto" md="2" sm="3">
                <h4 className="images-title">Circle Image</h4>
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/kaci-baum-2.jpg").default}
                />
                <p className="text-center">Brigitte Bardot</p>
              </Col>
              <Col className="mr-auto" md="2" sm="3">
                <h4 className="images-title">Thumbnail</h4>
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg").default}
                />
                <p className="text-center">John Keynes</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default SectionTypography;
