import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css';
import './styles.css';
import router from "./route/index.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
        <RouterProvider router={router} />
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);






