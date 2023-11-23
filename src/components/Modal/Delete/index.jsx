import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = ({ show, onHide, handleDeleteClick }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you Sure you want to delete?</p>
        <Button variant="danger" onClick={handleDeleteClick}>
          yes
        </Button>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
