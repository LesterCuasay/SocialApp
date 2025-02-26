import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/feed");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white shadow-md rounded w-100 p-8"
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <h2 className="text-center text-2xl">Login</h2>
        </div>
        <FloatingLabelInput
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
            Login
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

export default Login;
