import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col } from "react-bootstrap";

const Upload = ({ setFieldValue, values }) => {
  return (
    <Row className="mb-4">
      <Col>
        <div className="d-flex align-items-center justify-content-center ">
          <div className="file-upload">
            <label htmlFor="imageUpload" className="upload-icon">
              <FontAwesomeIcon icon={faUpload} size="2xl" />
            </label>
            <input
              id="imageUpload"
              name="selectedImage"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(event) => {
                const file = event.currentTarget.files[0];
                setFieldValue("selectedImage", file);
              }}
            />
            <div className="upload-container">
              <p className="upload">
                {values.selectedImage
                  ? `Selected Image: ${values.selectedImage.name}`
                  : "Upload Image"}
              </p>
              <span className="size">200px by 200px</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Upload;
