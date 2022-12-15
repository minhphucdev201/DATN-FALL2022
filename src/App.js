import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footers";
// import './App.css';
import Header from "./components/Headers";
import NotFound from "./components/NotFound";
import BlogFeature from "./features/Blog";
import CartFeature from "./features/Cart";
import HomePage from "./features/HomePage";
import ProductFeature from "./features/Product";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/home" component={HomePage} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
        <Route path="/blogs" component={BlogFeature} />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
