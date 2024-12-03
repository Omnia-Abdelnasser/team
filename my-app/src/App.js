import React from "react";
import './App.css'
// import About from "./componants/about";
import Home from "./componants/home";
import Footer from "./componants/footer";
// import Contact from "./componants/contact";
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
// const forabout=()=>{
// if(window.location.pathname=="/componants/about"){
//   return <About/>
// }
// }
// const forcontact=()=>{
//   if(window.location.pathname=="/componants/contact"){
//     return <Contact/>
//   }
// }
  return(
    <div>
  <Home/>
{/* {forabout()}
{forcontact()} */}
<Footer/>
    </div>
  );
 
}

export default App; 
  