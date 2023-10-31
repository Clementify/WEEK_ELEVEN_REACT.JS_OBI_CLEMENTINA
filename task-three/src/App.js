import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Contact from './components/Contact';
import NavigationMenu from './components/NavigationMenu';

function App() {

   return (
    <div className="App">
      <NavigationMenu />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;