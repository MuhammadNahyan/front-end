import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Login logic here
    console.log("Login button clicked");
    console.log("Email:", email);
    console.log("Password:", password);
    // Navigate to dashboard or home page after successful login
    navigate("/dashboard");
  };

  return (
    <>
      <div className="flex flex-col gap-4 bg-white px-6 py-8 w-[30%] rounded-lg">
        <h2 className="text-4xl text-[#3d6969] upper text-center font-medium mb-2">
          Login
        </h2>
        <input
          className="bg-gray-200 border-2 border-gray-300 rounded-md px-3 py-2 focus:border-[#3d6969] outline-none text-gray-600 duration-300"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col">
          <input
            className="bg-gray-200 border-2 border-gray-300 rounded-md px-3 py-2 focus:border-[#3d6969] outline-none text-gray-600 duration-300"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="bg-[#2c4646] text-gray px-5 py-2 rounded-md border-2 border-[#2c4646] hover:bg-transparent hover:text-[#2c4646] duration-300 self-center outline-none"
        >
          Login
        </button>
      </div>
      <p className="mt-2">
        Do not have an account?&nbsp;
        <Link to="/signup" className="hover:text-gray-400 underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Login;