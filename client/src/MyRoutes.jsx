import { createBrowserRouter, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Single from './pages/Single.jsx';
import Write from './pages/Write.jsx';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";


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