import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import NotFound from './pages/NotFoundPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
