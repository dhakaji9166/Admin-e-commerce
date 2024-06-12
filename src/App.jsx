import React, { createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar';

const MyContext = createContext();

function App() {
  const [isTroggleSidebar, setIsTroggleSidebar] = useState(false);

  const values = {
    isTroggleSidebar, setIsTroggleSidebar
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Navbar />
        <div className="main d-flex">
          <div className={`siderWrapper ${isTroggleSidebar ? 'toggled' : ''}`}>
            <Sidebar />
          </div>
          <div className={`content ${isTroggleSidebar ? 'toggled' : ''}`}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashbord' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
