import NavBar from "./Components/NavBar/NavBar";
import Banners from "./Components/Banners/Banners";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";

import { CartProvider } from "./Components/CartContext/CartContext";
import Carrito from "./Components/Cart/Cart";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
