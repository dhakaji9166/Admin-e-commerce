import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';

function App() {


  return (
    <BrowserRouter >
      <Navbar />
      <div className="main d-flex">
        <div className="siderWrapper">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashbord' element={<Dashboard />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>


  )
}

export default App