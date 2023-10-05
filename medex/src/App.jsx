import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Textbox } from "./components/Textbox";
import { database } from "./components/Data/register";
import { Dropdown } from "./components/Dropdown";
import { getData, getDataByAxios } from "./services";
import { APIcall } from "./components/pages/APIcalls";
import { CartContext } from "./context/cartContext";
import { AppRoutes } from "./AppRoutes";

function App() {
  const NameOfTheCompany = "Medtronic";
  const [cart, setCart] = useState(0);
  const addItemToCart = () => {
    setCart(cart + 1);
  };

  return (
    <div>
      <CartContext.Provider
        value={{ cartItemCount: cart, setCartItem: addItemToCart }}
      >
        <Header companyName={NameOfTheCompany} />
        <div className="container mt-5">
          <AppRoutes />
          <APIcall />
        </div>
      </CartContext.Provider>
    </div>
  );
}

export default App;
