import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="font-bold text-center">Cart</div>
      <div className="flex justify-center">
        {cartItems.length > 0 ? (
          <button
            className="bg-red-600 p-2 rounded-2xl text-white mt-2"
            onClick={() => {
              handleClearCart(); // ← call the function here
            }}
          >
            Clear Cart
          </button>
        ) : (
          <div>Please add some items.</div>
        )}
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.map((item, index) => (
          <ItemsList key={index} item={item} />
        ))}
      </div>
    </>
  );
};
export default Cart;
