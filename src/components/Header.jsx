import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [showIconLinks, setShowIconLinks] = useState(false);
  const status = useCheckStatus();
  const data = useContext(UserContext);

  // Select
  const cartItems = useSelector((store) => store.cart.items);
  const totalCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0)

  const loginBtn = (<button
    className="loginBtn border p-1 rounded bg-amber-500"
    onClick={() => {
      btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
    }}
  >
    {btnName}
  </button>)
  const cartLink = (<Link to="/cart">Cart({totalCount} Items)</Link>);
  const links = (<><li>
    <Link to="/">Home</Link>
  </li>
    <li>
      <Link to="/aboutus">About Us</Link>
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
    {/* <li>
      <Link to="/grossery">Grossery</Link>
    </li> */}
    </>)
  return (
    <>
      <nav className="flex justify-between items-center bg-orange-300 p-2">
        <div>
          <Link to="/"> <img className="w-18 bg-red rounded-lg" src={LOGO_URL} alt="Brand" /></Link>
        </div>
        <div>
          <ul className="*:m-3 *:hover:text-blue-900 *:hover:font-bold hidden lg:flex lg:items-center">
            <li>Online Status : {status === "Online" ? "✅" : "❌"}</li>
            {links}
            <li>
              {cartLink}
            </li>
            {/* <li>
              {loginBtn}
            </li> */}
            <div className="font-bold ">{data.loggedInUser}</div>
          </ul>
        </div>

        <div className="flex gap-x-3 items-center lg:hidden">
          <p className="hover:text-blue-900">{cartLink}</p>

          <div className="font-bold">{data.loggedInUser}</div>
          <button onClick={(() => setShowIconLinks(prev => !prev))} className="text-3xl">☰</button>
        </div>
      </nav>
      {showIconLinks ?
        <div className="text-center bg-orange-300 lg:hidden p-2">
          <ul className="*:hover:text-blue-900"><li>Online Status : {status === "Online" ? "✅" : "❌"}</li>
            {links}
          </ul>
          {/* {loginBtn} */}
        </div> : ""}</>
  );
};
export default Header;
