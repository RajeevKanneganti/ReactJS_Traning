import { useContext } from "react";
import { useNavigate } from "react-router"
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/AuthContext";

export const NavItems = () => {

    const { setCartItem } = useContext(CartContext); // use the Cart Context to set the cart Item.
    const {isLoggedIn, setLogout} = useContext(AuthContext); // use the authentication context to get the login flags and setLogout function
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
    },{
        id: 5,
        name: "Logout",
        URL: "/logout"
    }]

    const provideLinkArray = () =>{ //this function will check if user is logged in and have token or not, if token is available
        //then how the specific links from navLinks, else show only login or registration from navLinks,
        //this can be used for conditional rendering
        if(isLoggedIn && localStorage.getItem('token') != null){
            return navLinks.filter(x=>x.id >2) // if logged in and auth token is available then show the Products, cart, logout

        }else{
            return navLinks.filter(x=> x.id <=2) // if not logged in or auth token is empty then show login or Register
        }

    }

    const NavContent = () =>{
        return provideLinkArray().map((item, index) => {
            return (
                <li class="nav-item" key={index}>
                    <a class="nav-link" href="#" onClick={e=>{
                        if(item.URL == '/login'){
                            setLogout();
                        }
                        navigate(item.URL)
                    }}>{item.name}</a>
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