import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/utilities/common.css";
import "./styles/utilities/variables.css";
import { FilterProvider } from "./context/filter-context";
import { WishlistProvider } from "./context/wishlist-context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>
);
