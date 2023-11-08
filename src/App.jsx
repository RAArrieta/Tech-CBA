// import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Banners from "./Components/Banners/Banners";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListConteiner from "./Components/ItemListConteiner/ItemListConteiner";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banners />
      <Routes>
        <Route path="/" element={<ItemListConteiner />} />
        <Route path="/produtos/:categoria" element={<ItemListConteiner />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
