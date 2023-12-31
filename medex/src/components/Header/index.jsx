import { useContext } from "react";
import { NavItems } from "../NavItems";
import { CartContext } from "../../context/cartContext";

export const Header = (props) => {
  // props is the default parameter
  const { cartItemCount } = useContext(CartContext);
  return (
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {props.companyName}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <NavItems />
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <label className="btn btn-primary">CartCount: {cartItemCount}</label>
        </div>
      </div>
    </nav>
  );
};
