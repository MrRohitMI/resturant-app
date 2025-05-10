import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ResturantInfo from "./components/ResturantInfo";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resId",
        element: <ResturantInfo/>
      }
    ],
    errorElement: <Error />,
  },
]);

export default App;
