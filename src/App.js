import React from "react";
import Footer from "./components/Footers";
// import './App.css';
import Header from "./components/Headers";
import SideBar from "./components/SideBar";
import HomePage from "./features/HomePage";
import ProductFeature from "./features/Product";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      <SideBar />
      {/* <ProductFeature /> */}
      <Footer />
    </div>
  );
}

export default App;
