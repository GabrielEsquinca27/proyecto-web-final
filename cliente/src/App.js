import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Beneficios from './Components/Beneficios';
import Servicios from './Components/Servicios';
import Acerca from './Components/Acerca';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <Beneficios />
      <Servicios />
      <Acerca />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
