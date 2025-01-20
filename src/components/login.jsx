import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === 'Login Successfull') {
          alert('Login Successfull');
          navigate('/dashboard');
        } else {
          alert('Invalid Credentials');
        }
        })

      .catch((err) => console.log(err));
  }

  return (
    <div className="flex items-center justify-center bg-black bg-opacity-20 min-h-screen rounded-box">
      <div className="w-full max-w-sm bg-white p-10 rounded-box shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Registered Email"
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition">
            Login
          </button>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
