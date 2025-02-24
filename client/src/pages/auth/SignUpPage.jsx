import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/auth/signup", {
        username,
        password,
        email,
      });
      navigate("/login");
    } catch (error) {
      console.error("Signup Failed", error);
    }
  };
  return (
    <div className="flex justify-center">
      <form
        className="bg-white shadow-md rounded p-8 flex flex-col max-xs:w-75"
        onSubmit={handleSignUp}
      >
        <div className="mb-4">
          <h2 className="text-center text-2xl">Sign Up</h2>
        </div>
        <div className="mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="button-submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
