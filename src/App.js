import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import ContactForm from "./Components/contactForm/ContactForm";
import Header from "./Components/Header/Header";
import ProjectDetails from "./Components/Projects/ProjectDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
