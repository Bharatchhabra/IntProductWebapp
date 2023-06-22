import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetailModal from "./components/ProductDetailModal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <HeroSection />
        <Routes>
          <Route element={<Cart />} path="/cart" />
          <Route
            element={<ProductDetailModal />}
            path="/products/:productName"
          />
          <Route element={<ProductList />} path="/product-list" />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
