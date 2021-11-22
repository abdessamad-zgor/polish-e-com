import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ProductContextProvider,
  CartContextProvider,
  UserContextProvider,
  AppbarContextProvider,
} from "./context";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ViewCart from "./pages/ViewCart";
import Help from "./pages/Help";
import CheckOut from "./pages/CheckOut";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <div className="app">
      <AppbarContextProvider>
        <UserContextProvider>
          <ProductContextProvider>
            <CartContextProvider>
              <Router>
                <Switch>
                  <Route path="/help" component={Help} />
                  <Route path="/viewcart" component={ViewCart} />
                  <Route path="/account" component={AccountSettings} />
                  <Route path="/product/:slug" component={ProductDetails} />
                  <Route path="/checkout" component={CheckOut} />
                  <Route path="/" component={Home} />
                </Switch>
              </Router>
            </CartContextProvider>
          </ProductContextProvider>
        </UserContextProvider>
      </AppbarContextProvider>
    </div>
  );
}

export default App;
