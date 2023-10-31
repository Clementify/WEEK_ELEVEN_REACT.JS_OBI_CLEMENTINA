import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NavigationMenu from "./components/NavigationMenu";
import Portal from "./pages/Portal";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;