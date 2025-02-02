import About from "./component/About/About";
import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='contact' element={< Contact />} />
      </Routes>
    
      <Footer />
    </>
  );
}

export default App;
