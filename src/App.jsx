import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/men" element={<ShopCategory category="men"/>} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
