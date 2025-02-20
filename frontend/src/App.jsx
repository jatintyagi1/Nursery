import './App.css'
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'));


const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
