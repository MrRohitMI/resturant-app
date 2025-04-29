import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}
const resList = [
  { resName: "Meghana Foods", rating: 4.2, price: 300 },
  { resName: "KFC", rating: 3.9, price: 209 },
  { resName: "McDonald's", rating: 4.1, price: 207 },
  { resName: "Dominos", rating: 4.3, price: 333 },
  { resName: "King", rating: 3.7, price: 1000 },
];
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
          alt="no img"
        />
      </div>
      <div className="logo-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <input placeholder="Search..." className="search" />
      <div className="res-container">
        {resList.map((resturant, index) => (
          <RestaurantCard key={index} resObj={resturant} />
        ))}
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, rating, price } = props.resObj;
  return (
    <div className="res-card">
      <img
        src="https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg"
        alt="dish"
      />
      <div>{resName}</div>
      <div>Rating : {rating}</div>
      <div>Price : {price}Rs</div>
    </div>
  );
};
export default App;
