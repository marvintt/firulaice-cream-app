import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Shopping from "./pages/Shopping";
import Products from "./pages/Products";
import Categories from "./pages/Categories";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/cart" element={<Shopping/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories" element={<Categories/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
