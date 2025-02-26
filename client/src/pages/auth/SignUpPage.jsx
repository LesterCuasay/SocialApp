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
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white shadow-md rounded w-100 p-8"
        onSubmit={handleSignUp}
      >
        <div className="mb-4">
          <h2 className="text-center text-2xl">Sign Up</h2>
        </div>
        <FloatingLabelInput
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <FloatingLabelInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FloatingLabelInput
          label="Password"
          type="password"
          value={password}
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="mt-6 flex">
          <button className="button-submit" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const FloatingLabelInput = ({ label, type, value, onChange, required }) => {
  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-900"
      />
      <label
        className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 
        peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-300
        peer-valid:top-0 peer-valid:text-xs peer-valid:text-gray-300`}
      >
        {label}
      </label>
    </div>
  );
};

export default SignUpPage;
