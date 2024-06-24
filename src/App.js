import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import RestaurantMenu from "./components/RestaurantMenuPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { DEFAULT_GEOMETRY } from "./utils/constants";

const AppLayout = () => {
  const [geometry, setGeometry] = useState(DEFAULT_GEOMETRY);

  return (
    <div className="app">
      <Header setGeometry={setGeometry} />
      <Outlet context={[geometry]}/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router}/>);
