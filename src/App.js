import React from "react";
import Footer from "./components/Footers";
// import './App.css';
import Header from "./components/Headers";
import BlogFeature from "./features/Blog";
import HomePage from "./features/HomePage";
import ProductFeature from "./features/Product";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      {/* <ProductFeature /> */}
      <BlogFeature />
      <Footer />
    </div>
  );
}

export default App;
