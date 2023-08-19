import { RouterProvider } from "react-router-dom";
import router from './MyRoutes.jsx';
import './style.scss';

function App() {

  return (
    <div className="app">
      <div className="my-container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App;
