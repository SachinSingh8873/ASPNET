
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';

const Login = lazy(() => import('./components/login'));
const Register = lazy(() => import('./components/register'));

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;