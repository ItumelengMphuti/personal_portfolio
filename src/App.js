import './App.css';
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer"
import Accessibility from "./components/accessibility/AccessibilityPanel"
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Nav /> {/* use your Nav component */}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/articles" element={<Articles />} />
        {/* Add other routes when ready */}
      </Routes>
      <Accessibility />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;