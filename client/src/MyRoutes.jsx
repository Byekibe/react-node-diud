import { createBrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

export default router;