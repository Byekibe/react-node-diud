import { createBrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Single from './pages/Single.jsx';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/single/:id",
      element: <Single />,
    },
  ]);

export default router;