import { Route, Routes } from "react-router-dom";
import Bg from "./Bg";
import Cart from "./Cart";
import Products from "./components/Products";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShoppingCart />}>
          <Route path="/products" element={<Products />}>
            <Route path=":productId" element={<Bg />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
