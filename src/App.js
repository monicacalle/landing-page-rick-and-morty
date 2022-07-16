import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 bg-light">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
