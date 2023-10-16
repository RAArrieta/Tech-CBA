import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Banners from "./Components/Banners/Banners";
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner';
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Banners />
      <ItemListConteiner greeting="Bienvenidos!!"/>
      <Footer />
    </div>
  );
}

export default App;
