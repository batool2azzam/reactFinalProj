import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Page/SignUp';
import Login from './Page/Login';
import "./App.css";
import Home from "./Page/Home";
import Profile from "./Page/Profile";
import Direct from "./Page/Direct";
import Explore from "./Page/Explore";
import Authenticate from "./Page/Authenticate";
import ProtectedAuth from "./ProtectedAuth";
import ProtectedPage from "./ProtectedPage";
import { ThemeContextProvider } from './ThemeContext';




function App() {
  return (
    <div className='Home'>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedAuth><Authenticate /></ProtectedAuth>} />
            <Route path="/signup" element={<ProtectedAuth><SignUp /></ProtectedAuth>} />
            <Route path="/login" element={<ProtectedAuth><Login /></ProtectedAuth>} />
            <Route path="/home" element={<ProtectedPage><Home /></ProtectedPage>} />
            <Route path="/profile" element={<ProtectedPage><Profile /></ProtectedPage>} />
            <Route path="/explore" element={<ProtectedPage><Explore /></ProtectedPage>} />
            <Route path="/direct" element={<ProtectedPage><Direct /></ProtectedPage>} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}
export default App;
