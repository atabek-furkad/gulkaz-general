import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProductsPage />} path="/products" />
          <Route element={<ProductPage />} path="/products/:id" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<ProfilePage />} path="/profile" />
        </Routes>
        <ToastContainer position="bottom-right" limit={1} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
