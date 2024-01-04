import React,{useState} from 'react';
import Nav from './pages/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PrivateRouter from './components/PrivateRouter';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn ,setIsLoggedIn] = useState(false);

  return (
    <div className=' bg-black text-white flex flex-col h-full w-full'>
      
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn}/>}/> 
          <Route path='/dashboard' element={
          <PrivateRouter isLoggedIn={isLoggedIn}>
             <Dashboard/>
          </PrivateRouter>}
          /> 
          <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
      
    </div>
  );
}

export default App;
