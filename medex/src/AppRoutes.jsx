import { Route, Routes } from "react-router"
import { Login } from "./components/pages/login"
import { Register } from "./components/pages/register"
import { Products } from "./components/pages/products"
import { Cart } from "./components/pages/cart"
import { Protected } from "./components/Protected"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products"
                element={<Protected>
                    <Products />
                </Protected>} />
            <Route path="/cart"
                element={<Protected><Cart />
                </Protected>} />
            <Route path="*" element={<Login />} />
        </Routes>
    )
}