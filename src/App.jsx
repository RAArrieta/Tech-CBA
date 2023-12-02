import { CartProvider } from "./Components/CartContext/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import Banners from "./Components/Banners/Banners";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Banners />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/produtos/:categoria" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
