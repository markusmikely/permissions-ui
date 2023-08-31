import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RolesPage from './components/pages/RolesPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RolesPage />} />
      </Routes>
    </Router>
  )
}

export default App
