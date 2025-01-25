import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Sign up logic here
    console.log("Sign up button clicked");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    // Navigate to login page after successful sign up
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col gap-4 bg-white px-4 py-6 w-[30%] rounded-lg">
        <h2 className="text-3xl text-[#3d6969] upper text-center font-medium mb-2">
          Sign up
        </h2>
        <input
          className="bg-gray-200 border-2 border-gray-300 rounded-md px-3 py-2 focus:border-[#3d6969] outline-none text-gray-600 duration-300"
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="bg-gray-200 border-2 border-gray-300 rounded-md px-3 py-2 focus:border-[#3d6969] outline-none text-gray-600 duration-300"
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col">
          <input
            className="bg-gray-200 flex-grow border-2 border-gray-300 rounded-full px-3 py-2 focus:border-[#3d6969] outline-none text-gray-600 duration-300"
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSignUp}
          className="bg-[#2c4646] text-gray px-5 py-2 rounded-md border-2 border-[#2c4646] hover:bg-transparent hover:text-[#2c4646] duration-300 self-center"
        >
          Sign up
        </button>
      </div>
      <p className="mt-2">
        Already have an account?&nbsp;
        <Link to="/login" className="hover:text-gray-400 underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default SignUp;