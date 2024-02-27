import React from "react";
import data from "./data";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "./cartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { Navbar } from "react-bootstrap";
const Product = () => {
  const Dispatch = useDispatch();
  const { productId } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "90px",
        gap: "10px",
        marginBottom: "48px",
      }}
    >
      <h1 align="center">Product List</h1>
      <div>
        {data.map((item) => {
          return (
            <Stack
              gap={3}
              className="col text-center"
              style={{ marginTop: "20px" }}
            >
              <Card className="p-2" key={item.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src="./dummy.png" alt="holder" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  {!productId.includes(item.id) ? (
                    <Button
                      variant="primary"
                      onClick={() => Dispatch(addToCart(item.id))}
                    >
                      Add To Cart
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      onClick={() => Dispatch(removeFromCart(item.id))}
                    >
                      Remove Item
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Stack>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
