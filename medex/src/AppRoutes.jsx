import { Route, Routes } from "react-router";
import { Login } from "./components/pages/login";
import { Register } from "./components/pages/register";
import { Products } from "./components/pages/products";
import { Cart } from "./components/pages/cart";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
