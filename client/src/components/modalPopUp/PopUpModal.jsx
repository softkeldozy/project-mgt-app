import { Modal, Button } from 'react-bootstrap';

import { useState } from 'react'

const PopUpModal = () => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "10vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUpModal