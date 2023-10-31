import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NavigationMenu from "./components/NavigationMenu";
import Portal from "./pages/Portal";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/:name/:number" element={<Portal />}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} >
          <Route index element={<Navigate to='products' />}/>
          <Route path="products" element={<Products />}/>
          <Route  path="services" element={<Services />}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
