import React from "react";
import { Modal, Button } from "react-bootstrap";

const ViewModal = ({ show, onHide, record }) => {
  if (!show || !record) {
    return null;
  }

  const { values } = record;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>View Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            User: <img src={values} alt="User" />
          </li>
          <li>User Email: hameedj@gm.com</li>
          <li>User Mobile Number: +953056168840</li>
          <li>Stauts: True</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewModal;
