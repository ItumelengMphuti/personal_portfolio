import './App.css';
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav /> {/* use your Nav component */}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/articles" element={<Articles />} />
        {/* Add other routes when ready */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;