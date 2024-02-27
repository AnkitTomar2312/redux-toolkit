import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./components/product";
import Cart from "./components/cart";
import Modal from "./components/Modal";
function App() {
  return (
    <div>
      <Cart />
      <Product />
      <Modal />
    </div>
  );
}

export default App;
