import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  ProductContextProvider,
  CartContextProvider,
  UserContextProvider,
  AppbarContextProvider,
} from "./context";

//import pages

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ViewCart from "./pages/ViewCart";
import Products from "./pages/Products";
import Help from "./pages/Help";
import CheckOut from "./pages/CheckOut";
import AccountSettings from "./pages/AccountSettings";
import CollectionPage from "./pages/CollectionPage";
import Collections from "./pages/Collections";

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

                  <Route path="/products/:slug" component={ProductDetails} />
                  <Route path="/products" component={Products} />
                  <Route path="/checkout" component={CheckOut} />
                  <Route path="/collections/:name" component={CollectionPage} />
                  <Route path="/collections" component={Collections} />
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
