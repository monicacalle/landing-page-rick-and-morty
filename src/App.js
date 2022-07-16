import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 bg-light">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
