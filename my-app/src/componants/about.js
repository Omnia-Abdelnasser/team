
import React from "react";
const About=()=>{

    return(
        <>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
     integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossOrigin="anonymous" referrerPolicy="no-referrer" />
<div className="about">
  <div className="container">
    <div className="content">
      <h2 className="title">About <span>US</span></h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati officiis qui consequatur beatae? Eaque optio
        rerum quo nisi nobis ipsa, nemo quae officia labore enim possimus quisquam non iste?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati dignissimos sed nostrum inventore,
        minima fuga corporis vel. Iusto iure aut nulla iste nostrum 
        laboriosam corporis aspernatur quasi explicabo quo?</p>
      <div className="social">
        <i className="fa-brands fa-twitter" style={{color: 'rgb(86, 185, 247)', width: 40}} />
        <i className="fa-brands fa-facebook-f" style={{color: 'rgb(14, 28, 224)', width: 40}} />
        <i className="fa-brands fa-linkedin" style={{color: 'rgb(68, 74, 243)', width: 40}} />
        <i className="fa-brands fa-instagram" style={{color: 'rgb(232, 87, 74)', width: 40}} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <i className="fa fa-globe" />
          <h3>VISSION</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci
            hic repellat necessitatibus fuga possimus, laborum quam. Quas necessitat</p>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <i className="fa fa-book" />
          <h3>MISSION</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci
            hic repellat necessitatibus fuga possimus, laborum quam. Quas necessitat</p>
        </div>
      </div>
      <div className="col-md-4 py-3 py-md-0">
        <div className="card">
          <i className="fa fa-pencil" />
          <h3>ACHIEVEMENT</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci
            hic repellat necessitatibus fuga possimus, laborum quam. Quas necessitat</p>
        </div>
      </div>
    </div>
  </div>
</div>
</>

    );
}
export default About