import React from "react";
import './App.css'
import About from "./componants/about";
import Nav from "./componants/nav";
import Footer from "./componants/footer";
import RegistrationForm from "./componants/contact";
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
const forabout=()=>{
if(window.location.pathname=="/componants/about"){
  return <About/>
}
}
const forcontact=()=>{
  if(window.location.pathname=="/componants/contact"){
    return <RegistrationForm/>
  }
}
  return(
    <div>
  <Nav/>
{forabout()}
{forcontact()}
<Footer/>
    </div>
  );
 
}

export default App; 
  