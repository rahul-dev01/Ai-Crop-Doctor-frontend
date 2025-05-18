import { useState } from "react"
import { BrowserRouter, Route, Router, Routes, Navigate } from "react-router-dom"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomeScreen from "./screen/HomeScreen"
import Login from "./screen/Login"
import Upload from "./components/Upload"
import History from "./screen/History"
import Help from "./screen/Help"
import SignUp from "./screen/SignUp"

// const [isLoggedIn, setisLoggedIn] = useState(false)

const handleLogin = () => {
  setisLoggedIn(true);
};

const handleLogout = () => {
  setisLoggedIn(false);
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100 ">
        {/* <Navbar isLoggedIn = {handleLogin} onLogout={handleLogout}/> */}

        <Navbar/>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/history" element={<History />} />
            <Route path="/help" element={<Help/>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>




            {/* <Route path="/login" element={<Login onLogin = {handleLogin} />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App
