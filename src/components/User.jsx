import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] =useState(1);
  return (
    <div className="user-card">
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <h1>Name : {name}</h1>
      <h3>Place: {location}</h3>
      <h5>Email: @rohit</h5>
    </div>
  );
};

export default User;
