import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
