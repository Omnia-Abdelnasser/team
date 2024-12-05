import React from "react";
import './App.css'
import About from "./componants/about";
import Home from "./componants/home";
import Nav from "./componants/nav";
import Footer from "./componants/footer";
import Contact from "./componants/contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Products from "./componants/products";
function App(){
const forabout=()=>{
if(window.location.pathname=="/componants/about"){
  return <About/>
}
}
const forcontact=()=>{
  if(window.location.pathname=="/componants/contact"){
    return <Contact/>
  }
}
const forproduct=()=>{
  if(window.location.pathname=="/componants/products"){
    return <Products/>
  }
}
const forhome=()=>{
  if(window.location.pathname=="/componants/home"){
    return <Home/>
  }
}
  return(
    <div>
     <Nav/>
  {forhome()}
  {forproduct()}
 {forabout()}
{forcontact()}
<Footer/>
    </div>
  );
 
}

export default App; 
  