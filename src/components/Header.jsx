import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const status = useCheckStatus();
  const data = useContext(UserContext);

  // Select
  const cartItems = useSelector((store) => store.cart.items);
  const totalCount = cartItems.reduce((total,item)=>total + (item.quantity || 0),0)
  return (
    <div className="flex justify-between items-center bg-orange-300 py-2">
      <div>
        <img className="w-18 bg-red rounded-lg" src={LOGO_URL} alt="no img" />
      </div>
      <div>
        <ul className="flex *:m-3 *:hover:text-blue-900 *:hover:font-bold">
          <li>Online Status : {status === "Online" ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grossery">Grossery</Link>
          </li>
          <li>
            <Link to="/cart">Cart({totalCount} Items)</Link>
          </li>
          <li>
            <button
              className="loginBtn"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <div>{data.loggedInUser}</div>
        </ul>
      </div>
    </div>
  );
};
export default Header;
