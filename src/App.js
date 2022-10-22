import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footers";
// import './App.css';
import Header from "./components/Headers";
import SideBar from "./components/SideBar";
import BlogFeature from "./features/Blog";
import CartFeature from "./features/Cart";
import HomePage from "./features/HomePage";
import ProductFeature from "./features/Product";
import NotFound from "./components/NotFound";
import ListPage from "./features/Product/pages/ListPage";
import DetailPage from "./features/Product/pages/DetailPage";
// blog page
import ListPageBlog from "./features/Blog/pages/ListPageBlog";
import DetailPageBlog from "./features/Blog/pages/DetailPageBlog";
import Login from "./features/Auth/components/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductFeature />}>
          <Route path="" element={<ListPage />} />
          <Route path=":id" element={<DetailPage />} />
        </Route>
        <Route path="/blog" element={<BlogFeature />}>
          <Route path="" element={<ListPageBlog />} />
          <Route path=":id" element={<DetailPageBlog />} />
        </Route>
        <Route path="/cart" element={<CartFeature />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
