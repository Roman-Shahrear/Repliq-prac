import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import ShowProduct from "./Pages/ShowProduct";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
