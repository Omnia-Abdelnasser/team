const Nav=()=>{
return(
<>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
     integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossOrigin="anonymous" referrerPolicy="no-referrer" />
<div style={{display: 'block', color: 'bisque',backgroundColor:'black'}}>
  <nav className="navbar navbar-expand-lg navbar-custom" style={{position: 'sticky', top: 0}}>
    <div className="navbar-white w-100">
      <div className="menu-icon" style={{backgroundColor: 'rgba(195, 166, 132, 0.973)'}}>
        <button style={{margin: 20, top: 0, left: 0, color: 'bisque'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <div style={{color: 'bisque'}} className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse" style={{color: 'bisque'}} id="navbarContent">
        <div className="logo">
          <h2 style={{textAlign: 'center'}}>NEW<span>IKEA</span></h2>
        </div>
        <ul className="navbar-nav ml-auto" style={{marginLeft: '13%'}}>
          <li className="nav-item">
            <a className="nav-link" style={{color: '#cb9b74'}} href="/componants/home"> HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color: 'bisque'}} href="/componants/products">products</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color: 'bisque'}} href="/componants/contact">Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color: 'bisque'}} href="/">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color: 'bisque'}} href="/componants/about">About us</a>
          </li>
        </ul>
        <div className="icon-box">
          <a href="/"><i className="fa-solid fa-house" /></a>
        </div>
      </div>
    </div>
  </nav>
</div>


</>
);


}
export default Nav