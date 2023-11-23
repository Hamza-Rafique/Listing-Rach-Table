import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const BasicInfo = () => {
  return (
    <>
      <Row>
        <Col>
          <label className="label">Basic Info</label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="firstName">
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
            name="firstName"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="lastName">
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
            name="lastName"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="email">
            {({ field }) => (
              <TextField
                {...field}
                label="Email"
                defaultValue="Enter Your Email"
                className="input-filed"
              />
            )}
          </Field>

          <ErrorMessage name="email" component="div" className="text-danger" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Field name="contact">
            {({ field }) => (
              <TextField
                {...field}
                label="Contact"
                defaultValue="Enter Your Contact"
                className="input-filed"
              />
            )}
          </Field>
          <ErrorMessage
            name="contact"
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
          <Field name="address">
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
            name="address"
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

export default BasicInfo;
