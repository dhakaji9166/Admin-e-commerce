import React, { createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';

const MyContext = createContext();

function App() {
  const [isTroggleSidebar, setIsTroggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false)


  const values = {
    isTroggleSidebar,
    setIsTroggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHideSidebarAndHeader !== true &&
          <Navbar />
        }
        <div className="main d-flex">
          {
            isHideSidebarAndHeader !== true &&
            <div className={`siderWrapper ${isTroggleSidebar ? 'toggled' : ''}`}>
              <Sidebar />
            </div>
          }
          <div className={`content ${isHideSidebarAndHeader === true && "full"} ${isTroggleSidebar ? 'toggled' : ''}`}>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashbord' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signUp' element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
