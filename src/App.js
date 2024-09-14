import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Navigation/Nav";
import Home from "./components/Navigation/Home";
import Contact from "./components/Navigation/Contact";
import ErrPage from "./components/Navigation/ErrPage";
import Login from "./components/Log_sign/Login";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
