import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    const confirmClear = window.confirm("Are sure that you want to clear the cart");
    if(confirmClear) dispatch(clearCart());
  };
  const totalPrice = cartItems.reduce((total,item) => total + ((item.price/100 || item.defaultPrice/100)*item.quantity),0)
  console.log(cartItems);
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
          <ItemsList key={index} item={item} page="cart"/>
        ))}
      </div>
      <div className="w-6/12 m-auto bg-gray-300 mt-5 p-2 text-right text-lg font-bold">
      Total Price - {totalPrice}
      </div>
    </>
  );
};
export default Cart;
