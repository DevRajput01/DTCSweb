import Home from "./Components/Pages/Home";
import Contect from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Header from "./Components/Pages/Header";
import Footer from "./Components/Pages/Footer";
import Portfolio from "./Components/Pages/Portfolio";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
    <Header />
    <Home />
    {/* <About /> */}
    <Portfolio />
    <Contect />
    <Footer />
    </>
  )
}

export default App;
