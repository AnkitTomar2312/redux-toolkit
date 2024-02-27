import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import modalSlice from "./modalSlice";
import cartSlice from "./cartSlice";
function Example() {
  const text = useSelector((state) => state.modal.showModal);
  const { productId } = useSelector((state) => state.cart);
  const show = text;
  const { showModal } = modalSlice.actions;
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(showModal());
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Placed 🥳</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s 😊,
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Example;
