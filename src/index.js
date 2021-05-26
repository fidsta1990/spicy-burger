import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import CartProvider from './store/context'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
