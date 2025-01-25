import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <div className="main-container w-full h-screen flex flex-col justify-center items-center">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
