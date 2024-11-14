import './App.css'
import { lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFoundPage'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
