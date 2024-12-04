import img1 from './image/decor2.jpg'
// import img2 from './image/decor22.jpg'
// import img3 from './image/decor25.jpg'
import img4 from './image/decor3.jpg'
import img5 from './image/decor4.jpg'
import img6 from './image/decor5.jpg'
import img7 from './image/decor6.jpg'
import img8 from './image/decor7.jpg'
import img9 from './image/decor8.jpg'
// import img10 from './image/decor9.jpg'
// import img11 from './image/shopping (1).webp'
 const Home=()=>{

    return(
<>
<div>
  <div className="base">
    <div className="baseGeneral">
      <h2 className='main-text'>Quality is the best thing in the business</h2>
    
      <p className='txt'>we make our products in the best shope for<br/> your happiness<br/> so we hope to build a bridge of trust with you </p>
      
      <div className="baseTxt">NewIkea for best furniture</div>
    </div>
  </div>
  <section id="products" className="products">
    <div className="container">
      <h2>Special Offers</h2>
      <div className="product-grid">
      <div className='row'>
        <div className='col-md-3 py-3 py-md-0'>
        <div className="product">
          <img src={img1} alt="" />
          <h3>Luxury sofa</h3>
          <p>500$</p>
        </div>
        </div>
       
        <div className='col-md-3 py-3 py-md-0'>
        <div className="product">
          <img src={img6}alt="" />
          <h3>Comfortable chair</h3>
          <p>150$</p>
        </div>
        </div>
        
        <div className='col-md-3 py-3 py-md-0'>
        <div className="product">
          <img src={img4}alt="" />
          <h3>Classic Office</h3>
          <p>150$</p>
        </div>
        </div>

        <div className='col-md-3 py-3 py-md-0'>
        <div className="product">
          <img src={img5} alt="" />
          <h3>Modern bed</h3>
          <p>150$</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  <section className="hero">
    <div className="container">
      <h2>Comfortable &amp; stylish furniture for your home</h2>
      <p>اكتشف مجموعتنا المميزة لتزيين منزلك بأحدث التصاميم.</p>
      <a href="#products" className="btn">Brouse Products</a>
    </div>
  </section>
  <section>
    <div className="actors">
      <div>
        <h2>The best collection in the world !!</h2>
      </div>
      <img src={img1} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
      <img src={img7} alt="" />
      <img src={img8} alt="" />
      <img src={img9} alt="" />
      {/* <img src={img10} alt="" /> */}
      <br /><br />
      <b>visit us now what are you wating for!</b>
      <br /><br />
      <div className="social">
        <i className="fa-brands fa-twitter" style={{color: 'rgb(86, 185, 247)', width: 40}} />
        <i className="fa-brands fa-facebook-f" style={{color: 'rgb(14, 28, 224)', width: 40}} />
        <i className="fa-brands fa-linkedin" style={{color: 'rgb(68, 74, 243)', width: 40}} />
        <i className="fa-brands fa-instagram" style={{color: 'rgb(232, 87, 74)', width: 40}} />
      </div>
      <br />
    </div>
  </section>
</div>



</>
    );
}
export default Home