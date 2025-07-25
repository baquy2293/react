import logo from './logo.svg';
import './App.css';
import Login from "./Pages/Login"; // sai nếu folder thật là "pages"
import UserPage from "./Pages/User"; // sai nếu folder thật là "components"
import "antd/dist/reset.css"; // Ant Design v5

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/user", element: <UserPage /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
