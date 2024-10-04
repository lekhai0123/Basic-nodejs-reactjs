import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Navigation/Nav";
import Home from "./components/Navigation/Home";
import Contact from "./components/Navigation/Contact";
import ErrPage from "./components/Navigation/ErrPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrPage />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={1}
        delay={200}
      />
    </div>
  );
}

export default App;
