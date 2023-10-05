import { useContext } from "react";
import { useNavigate } from "react-router"
import { CartContext } from "../../context/cartContext";

export const NavItems = () => {
    // const NavProducts = [{
    //     id: 1,
    //     name: "Pace Maker",
    //     URL: "/paceMaker"
    // },{
    //     id: 2,
    //     name: "Stealth Station",
    //     URL: "/StealthStation.org"
    // },{
    //     id: 3,
    //     name: "Oxymeter",
    //     URL: "/oxy.org"
    // },{
    //     id: 4,
    //     name: "O-arm",
    //     URL: "/o-arm.org"
    // }]
    const { setCartItem } = useContext(CartContext);
const navigate = useNavigate();
    const navLinks = [{
        id: 1,
        name: "Login",
        URL: "/login"
    },{
        id: 2,
        name: "Register",
        URL: "/register"
    },{
        id: 3,
        name: "Products",
        URL: "/products"
    },{
        id: 4,
        name: "Cart",
        URL: "/cart"
    }]
    const NavContent = () =>{
        return navLinks.map((item, index) => {
            return (
                <li class="nav-item">
                    <a class="nav-link" key={index} href="#" onClick={e=>{
                        navigate(item.URL)
                    }}>{item.name}</a>
                    {/* <a class="nav-link" key={index} href={item.URL}>{item.name} </a> */}
                </li>
            )
        })
    }
    return(
        <ul class="navbar-nav me-auto">
            {NavContent()}
        </ul>
    )
}