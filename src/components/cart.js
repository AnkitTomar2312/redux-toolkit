import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const Cart = () => {
  const { productId } = useSelector((state) => state.cart);
  const { clearAll } = cartSlice.actions;
  const { showModal } = modalSlice.actions;
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container className="justify-content-space-between">
        <Navbar.Brand style={{ fontSize: "28px" }}>Cart</Navbar.Brand>
        <Navbar.Brand>{productId.length}</Navbar.Brand>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(clearAll());
            if (productId.length > 0) {
              dispatch(showModal());
            } else {
              alert("Please add some itmes first");
            }
          }}
        >
          Buy
        </Button>
      </Container>
    </Navbar>
  );
};

export default Cart;
