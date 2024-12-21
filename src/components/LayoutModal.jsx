import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LayoutModal = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Select Layout</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Choose a layout for your dashboard</p>
        {/* Add layout previews here */}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">View Documentation</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default LayoutModal;