// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
  
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("JI");
//     axios
//       .post('http://localhost:3001/register', { email, password })
//       .then((res) => {
//         console.log(res)
//         alert('Registration Successfull');
//         navigate('/dashboard');
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setErrorMessage('All fields are required.');
      return;
    }

    axios
      .post('http://localhost:3001/register', { email, password })
      .then((res) => {
        setSuccessMessage(res.data.message || 'Registration Successful!');
        setErrorMessage('');
        setName('');
        setEmail('');
        setPassword('');
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(
          err.response?.data?.message || 'An error occurred during registration.'
        );
      });
  };

  return (
      <div className="flex items-center justify-center bg-black bg-opacity-20 min-h-screen rounded-box">
        <div className="w-full max-w-sm bg-white p-10 rounded-box shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-5">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">
                Full Name
              </label>
              <input type="text" id="name" placeholder="Enter your Full Name" required className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                Email
              </label>
              <input type="email" id="email" placeholder="Enter your Email ID" required className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
              <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Enter your password" required className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 mt-3"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition">
            Register
          </button>

            <p className="mt-4 text-sm text-gray-600 text-center">
              Already have an account?  
              <a href="/login" className="text-blue-500 hover:underline ml-2">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
  );
}

export default Register;