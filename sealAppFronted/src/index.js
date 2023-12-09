import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoginPage from "./LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const shouldRenderLoginPage =
  window.location.href === "https://auto-ship-app.onrender.com/";
const Main = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    console.log("current url get>>",window.location.href);
    if (loggedIn) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("isLoggedIn");
    }
  }, [loggedIn]);

  if (shouldRenderLoginPage && !loggedIn) {
    return <LoginPage setLoggedIn={setLoggedIn} />;
  }

  // if (loggedIn) {
  //   return <a class="redirectShopify__url"href="https://admin.shopify.com/store">Go To the Shopify Store</a>;
  // }

  return <App />;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
