import './App.css'
import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home'));


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default App
