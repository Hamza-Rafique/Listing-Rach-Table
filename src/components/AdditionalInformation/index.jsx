import { TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
import React from "react";
import { Col, Row } from "react-bootstrap";

const AdditionalInfo = () => {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <label className="label">Additional Information</label>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="highestDegree">
            {({ field }) => (
              <TextField
                {...field}
                label="Highest Degree"
                defaultValue="Enter Your Highest Degree"
                className="input-filed"
              />
            )}
          </Field>
          <ErrorMessage
            name="highestDegree"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="nationality">
            {({ field }) => (
              <TextField
                {...field}
                label="Nationality"
                defaultValue="Enter Your Nationality"
                className="input-filed"
              />
            )}
          </Field>
          <ErrorMessage
            name="nationality"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Field name="designation">
            {({ field }) => (
              <TextField
                {...field}
                label="Designation"
                defaultValue="Enter Your Designation"
                className="input-filed"
              />
            )}
          </Field>
          <ErrorMessage
            name="designation"
            component="div"
            className="text-danger"
          />
        </Col>
      </Row>
    </>
  );
};

export default AdditionalInfo;
