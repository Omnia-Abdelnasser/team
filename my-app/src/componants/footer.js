import React from "react";
const Footer=()=>{
    return(
      <>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
<div className="footer " style={{fontFamily:'initial'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-3 py-3 py-md-0">
        <div className="item">
          <h4>Faurnish.com</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel doloremque sit
            exercitationem quam reiciendis, aut id eaque aperiam ad, 
            officia quo ullam commodi eum sapiente sunt! Qui beatae facere necessitatibus?</p>
          <div className="social">
            <i className="fa-brands fa-twitter" style={{color: 'rgb(86, 185, 247)', width: 40}} />
            <i className="fa-brands fa-facebook-f" style={{color: 'rgb(14, 28, 224)', width: 40}} />
            <i className="fa-brands fa-linkedin" style={{color: 'rgb(68, 74, 243)', width: 40}} />
            <i className="fa-brands fa-instagram" style={{color: 'rgb(232, 87, 74)', width: 40}} />
          </div>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="item">
          <h4>Contact US</h4>
          <p>1203, flake street, Drive fl
            5766,LA,USA </p>
          <p>Phone: +474 (4657) 2000</p>
          <p>Email: info@furnish.com</p>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="item">
          <h4>Recent Post</h4>
          <ul>
            <li><a>Rooms Decoration package</a></li>
            <li><a>Dinning Materials</a></li>
            <li><a>Events Furniture</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="item">
          <h4>Our Porttfolio</h4>
          <ul>
            <li><a href="#">EFTA Design</a></li>
            <li><a href="#">Country Mall Decoration </a></li>
            <li><a href="#">SOO conference</a></li>
            <li><a href="#">LA Events</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="copy">
    <p>
      ©copyright 2024. All Right Reserved.Designed and 
      Developed BY Omniya</p>
  </div>
</div>
</>
    );
}
export default Footer