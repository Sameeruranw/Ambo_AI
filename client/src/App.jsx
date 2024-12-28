import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Services from "./pages/Services/Services";
import Footer from "./components/Footer/Footer";
import AdminDashboard from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import { useState } from "react";
import Article from "./pages/Article/Article";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";
import Products from "./pages/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import EventDetails from "./components/EventDetails/EventDetails";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="Articles" element={<Article />} />
          <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route
            path="admin"
            element={
              isAuthenticated ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
