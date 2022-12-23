import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footers";
// import './App.css';
import Header from "./components/Headers";
import NotFound from "./components/NotFound";
import BlogFeature from "./features/Blog";
import CartFeature from "./features/Cart";
import CheckoutFeature from "./features/Checkout";
import Contact from "./features/Contact/Contact";
import HomePage from "./features/HomePage";
import ProductFeature from "./features/Product";
import Account from "./features/Auth/components/Account/index";
import Thankyou from "./features/Checkout/components/Thankyou/Thankyou";
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
        <Route path="/account" component={Account} />
        <Route path="/thankyou" component={Thankyou} />
        <Route path="/chinh-sach-huong-dan" component={Contact} />
        <Route path="/checkout">
          <CheckoutFeature />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
