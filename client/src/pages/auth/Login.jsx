import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center">
      <form
        className="bg-white shadow-md rounded p-8 flex flex-col max-xs:w-75"
        onSubmit={() => {}}
      >
        <div className="mb-4">
          <h2 className="text-center text-2xl">
            Login
          </h2>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
