import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/singlepageapplication/Singlepage";
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"
import { CartProvider } from "./libs/CartContext";
import Products from "./pages/products/Products";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
