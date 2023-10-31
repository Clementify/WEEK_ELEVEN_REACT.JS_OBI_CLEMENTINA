import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Welcome to the about page</h1>
      <NavLink to="products">Products</NavLink>
      <NavLink to="services">Services</NavLink>
      
      <Outlet />
    </div>
  );
};

export default About;
