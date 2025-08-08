import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientList from './pages/ClientList'
import ClientDetail from './pages/ClientDetail'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientList />} />
      <Route path="/client/:id" element={<ClientDetail />} />
    </Routes>
  </BrowserRouter>
)

export default App
