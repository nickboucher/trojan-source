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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

// core components

function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="section javascript-components">
        <Container>
          <div className="title">
            <h2>Javascript Components</h2>
          </div>
          <Row id="modals">
            <Col md="6">
              <div className="title">
                <h3>Modal</h3>
              </div>
              {/* Button trigger modal */}
              <Button
                className="btn-round"
                color="danger"
                outline
                type="button"
                onClick={toggleModal}
              >
                Launch demo modal
              </Button>
              {/* Modal */}
              <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  >
                    Modal title
                  </h5>
                </div>
                <div className="modal-body">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth. Even the all-powerful
                  Pointing has no control about the blind texts it is an almost
                  unorthographic life One day however a small line of blind text
                  by the name of Lorem Ipsum decided to leave for the far World
                  of Grammar.
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >
                      Never mind
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link" color="danger" type="button">
                      Delete
                    </Button>
                  </div>
                </div>
              </Modal>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Popovers</h3>
              </div>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip344834141"
                outline
                onClick={(e) => e.target.focus()}
              >
                On top
              </Button>
              <UncontrolledPopover
                placement="top"
                target="tooltip344834141"
                trigger="focus"
              >
                <PopoverHeader>Popover on top</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip493417725"
                outline
                onClick={(e) => e.target.focus()}
              >
                On bottom
              </Button>
              <UncontrolledPopover
                placement="bottom"
                target="tooltip493417725"
                trigger="focus"
              >
                <PopoverHeader>Popover on bottom</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip746845223"
                outline
                onClick={(e) => e.target.focus()}
              >
                On left
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "top" : "left"}
                target="tooltip746845223"
                trigger="focus"
              >
                <PopoverHeader>Popover on left</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                className="btn-round"
                color="danger"
                id="tooltip909471006"
                outline
                onClick={(e) => e.target.focus()}
              >
                On right
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "top" : "right"}
                target="tooltip909471006"
                trigger="focus"
              >
                <PopoverHeader>Popover on right</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about this popover.
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
            <br />
            <Col md="6">
              <div className="title">
                <h3>Datepicker</h3>
              </div>
              <Row>
                <Col sm="6">
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Datetime Picker Here",
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <div className="title">
                <h3>Tooltips</h3>
              </div>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip392938669"
                outline
              >
                On left
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="left"
                target="tooltip392938669"
              >
                On left
              </UncontrolledTooltip>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip354225297"
                outline
              >
                On right
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="tooltip354225297"
              >
                On right
              </UncontrolledTooltip>
              <Button
                className="btn-round mr-1"
                color="danger"
                id="tooltip739061283"
                outline
              >
                On top
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="tooltip739061283"
              >
                On top
              </UncontrolledTooltip>
              <Button
                className="btn-round"
                color="danger"
                id="tooltip984013562"
                outline
              >
                On bottom
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="bottom"
                target="tooltip984013562"
              >
                On bottom
              </UncontrolledTooltip>
            </Col>
          </Row>
          <div className="title">
            <h3>Carousel</h3>
          </div>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionJavaScript;
