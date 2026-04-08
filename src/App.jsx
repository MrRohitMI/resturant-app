import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import ResturantInfo from "./components/ResturantInfo";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const Grossery = lazy(() => import("./components/Grossery"));
function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Cena",
    };
    setUserName(data.name);
  }, []);
  return (
    <div className="App min-h-screen flex flex-col">
      {/* loggedInUser = "Rohit Mourya"(default) */}
      <Provider store={appStore}>
        {/* <UserContext.Provider value={{ loggedInUser: userName, setUserName }}> */}
          {/* loggedInUser = "Cena" */}
          {/* <UserContext.Provider value={{ loggedInUser: "Happy" }}> */}
          {/* loggedInUser = "Happy" */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
          <Footer/>
        {/* </UserContext.Provider> */}
      </Provider>
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
        path: "grossery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grossery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:resId",
        element: <ResturantInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
