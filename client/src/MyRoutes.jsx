import { createBrowserRouter, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Single from './pages/Single.jsx';
import Write from './pages/Write.jsx';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Register from './pages/Register.jsx';
import Login from "./pages/Login.jsx";
import Err from "./pages/Err.jsx";
import Profile from './pages/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/edit/:id",
        element: <Write />,
      },
    ]
  },
  
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "*",
    element: <Err />
  }

  ]);

  function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

export default router;