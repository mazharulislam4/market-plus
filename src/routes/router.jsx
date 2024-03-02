import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/" ,  element: <Home />},
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default routes;
