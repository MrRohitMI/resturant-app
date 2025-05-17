import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <>
      <h1>About Us</h1>
      <h3>This Page is About our company.</h3>
      {/* <User name={"Rohit Mourya (function)"} location={"Hyderabad Function"} />
      <br /> */}
      <UserClass name={"Rohit Mourya (class)"} location={"Hyderabad Class"} />
    </>
  );
};

export default AboutUs;
