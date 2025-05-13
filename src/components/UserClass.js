import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h3>Count : {count}</h3>
        {/* <h3>Count2 : {count2}</h3> */}
        <h1>Name : {name}</h1>
        <h3>Place: {location}</h3>
        <h5>Email: @rohit</h5>
      </div>
    );
  }
}
export default UserClass;
