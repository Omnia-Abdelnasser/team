import q1 from'./image/a1.jpg'
import q2 from './image/a2.jpg'
import q3 from './image/a3.jpg'
import q4 from './image/a4.jpg'
import z1 from './image/b1.jpg'
import z2 from './image/b2.jpg'
import z3 from './image/b3.webp'
import z4 from './image/b4.jpg'
import s1 from './image/c1.jpeg'
const Products=()=>{
    

return(


<div className="products">
  <div className="product1">
    <h2 className="main-title">Populer Furnituire</h2>
    <div className="row">
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={q1} alt =""/>
          <p>Luxury Sofa</p>
          <p>4000 <span>$</span></p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={q2} alt="" />
          <p>Luxury Sofa</p>
          <p>4000 <span>$</span></p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={q3} alt="" />
          <p>Luxury Sofa</p>
          <p>4000 <span>$</span></p>
          <button>Add to Cart</button>
        </div>
      </div>   
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={q4} alt="" />
          <p>Luxury Sofa</p>
          <p>4000 <span>$</span></p>
          <button>Add to Cart</button>
        </div>
      </div>                   
    </div>
  </div>
  <div className="product3">
    <div className="row">
      <div className="col-md-5 py-3 py-md-0">,
        <strong className="title">collection</strong>
        <h3 className="pan"> Luxury Furnituire</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button> <a href>Shop Now</a></button>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <img src={s1}  alt=""/>
      </div>
    </div>
  </div>
  <div className="product1">
    <h2 className="main-title"> Recent Furnituire</h2>
    <div className="row">
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={z1} alt="" />
          <p>Luxury Sofa</p>
          <p>4000 <span>$</span></p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={z2} alt="" />
          <p>Luxury Sofa</p>
          <p>4000 <span>$</span></p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={z3} alt="" />
          <p>Luxury Sofa</p>
          <p>4000 <span>$</span></p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="col-md-3 py-3 py-md-0">
        <div className="card">
          <img src={z4} alt="" />
          <p>Luxury Sofa</p>
          <p>4000 <span>$</span></p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>




);
}
export default Products