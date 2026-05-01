import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import cartImage from "../assets/images/empty-cart.jpg"
 
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    const confirmClear = window.confirm("Are sure that you want to clear the cart");
    if (confirmClear) dispatch(clearCart());
  };
  const totalPrice = cartItems.reduce((total, item) => total + ((item.price / 100 || item.defaultPrice / 100) * item.quantity), 0)
  return (
    <div className="flex-1 overflow-auto">
      <div className="font-bold text-center">Cart</div>
      <div >
        {cartItems.length > 0 ? (
          <div >
            <div className="flex justify-center">
              <button
                className="bg-red-600 p-2 rounded-2xl text-white mt-2"
                onClick={() => {
                  handleClearCart();
                }}
              >
                Clear Cart
              </button></div>
            <div className="bg-gray-200 mx-auto my-3 w-11/12 p-2 shadow sm:w-8/12 lg:w-6/12 xl:6/12">
              {cartItems.map((item, index) => (
                <ItemsList key={index} item={item} page="cart" />
              ))}
            </div>
            <div className="w-6/12 m-auto bg-gray-300 mt-5 p-2 text-right text-lg font-bold mb-5">
              Total Price - {totalPrice}
            </div></div>
        ) : (
          <div className="text-center">
            <img src={cartImage} alt="Empty Cart" className="lg:w-4/12 m-auto"/>
            <p className="font-bold text-xl">Your cart is empty.</p>
            <p className="text-gray-500 mb-3">You can go to home page to view more restaurants.</p>
          </div>
        )}
      </div>

    </div>
  );
};
export default Cart;
