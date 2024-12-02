const Nav =()=>{
return(
<>
  <nav id="navbar" className="navbar">
  <div className="logo">
    <h2>NEW<span>IKEA</span></h2>
  </div>
  <ul className="nav-links" id="nav-links">
    <li><a style={{color: '#e2bb9c'}} href="/"><b>Home</b></a></li>
    <li><a href="/">products</a></li>
    <li><a href="/componants/contact">Contact Us</a></li>
    <li><a href="/componants/about">About </a></li>
  </ul>
  <div className="actions">
    <input type="text" id="search" placeholder="Search..." />
    <button id="theme-toggle3"><i className="fa-solid fa-circle-half-stroke" /></button>
  </div>
  <div className="menu-icon" id="menu-icon">☰</div>
</nav>

    
</>
);


}
export default Nav