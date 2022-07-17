import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterList from "./views/Characters/List";
import CharacterDetail from "./views/Characters/Detail";
import injectContext from "./store/context";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 bg-light">
      <BrowserRouter>
        <Navbar />
        <div className="p-5">
          <Routes>
            <Route index element={<Home />} />
            <Route path="characters" element={<CharacterList />} />
            <Route
              path="characters/:characterId"
              element={<CharacterDetail />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
