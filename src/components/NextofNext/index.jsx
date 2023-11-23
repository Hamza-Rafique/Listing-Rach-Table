import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const NextofNext = () => {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <label className="label">Next of Next</label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="kinFirstName">
            {({ field }) => (
              <TextField
                {...field}
                label="First Name"
                defaultValue="Enter First Name"
                className="input-filed"
              />
            )}
          </Field>

          <ErrorMessage
            name="kinFirstName"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="kinLastName">
            {({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                defaultValue="Enter Last Name"
                className="input-filed"
              />
            )}
          </Field>

          <ErrorMessage
            name="kinLastName"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="kinEmail">
            {({ field }) => (
              <TextField
                {...field}
                label="Email"
                defaultValue="Enter Your Email"
                className="input-filed"
              />
            )}
          </Field>

          <ErrorMessage
            name="kinEmail"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="kinMobile">
            {({ field }) => (
              <TextField
                {...field}
                label="Mobile"
                defaultValue="Enter Mobile Number"
                className="input-filed"
              />
            )}
          </Field>

          <ErrorMessage
            name="kinMobile"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="label">Address</label>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Field name="kinAddress">
            {({ field }) => (
              <TextField
                {...field}
                label="Address"
                defaultValue="Enter Your Address"
                className="input-filed"
              />
            )}
          </Field>
          <ErrorMessage
            name="kinAddress"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>

      <Button
        variant="outline-primary"
        onClick={() => ""}
        className="add-new-btn"
      >
        Change
      </Button>
    </>
  );
};

export default NextofNext;
