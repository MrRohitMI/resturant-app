import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <h1>About Us</h1>
      <h3>This Page is About our company.</h3>
      {/* <User name={"Rohit Mourya (function)"} location={"Hyderabad Function"} /> */}
      {/* <br /> */}
      <UserClass name={loggedInUser + "(class)"} location={"Hyderabad Class"} />
    </>
  );
};

export default AboutUs;
