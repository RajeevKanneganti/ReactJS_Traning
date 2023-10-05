import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const APIcall = () => {

  const { setCartItem } = useContext(CartContext);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={e=> {
          setCartItem();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};