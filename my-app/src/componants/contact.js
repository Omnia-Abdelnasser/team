import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const Submit = (e) => {
    e.preventDefault();

    const newuser = {
      name: name,
      email: email,
      password: password,
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.push(newuser);

    localStorage.setItem('users', JSON.stringify(users));

    setMessage('Registration completed successfully');

    setName('');
    setEmail('');
    setPassword('');

    setTimeout(() => {
      setMessage('');
    }, 2500); 
  };
       return(
     <>

 <div className="contact">
  <h1 style={{fontSize: 35, fontWeight: 400, textAlign: 'center', width: 500, wordSpacing: 10}}>Contact<span> Us</span></h1>
  <div className="container">
    <div className="row">
      <div className="col-md-5 py-3 py-md-0">
        <div className="new">
          <section>
            <i className="fa-solid fa-location-dot" />
            <h2>Address : </h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </section>
          <section>
            <i className="fa-solid fa-phone" />
            <h2>Phone : </h2>
            <p>123-456-7890</p>
          </section>
          <section>
            <i className="fa-solid fa-envelope" />
            <h2>E-mail : </h2>
            <p>example@email.com</p>
          </section>
        </div>
      </div>
      <div className="col-md-7 py-3 py-md-0">
        <form onSubmit={Submit}>
                    <input type="text" placeholder="Name" id="name" value={name} onChange={(e)=> setName(e.target.value)} required />
          <input type="email" placeholder="Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                           <input type="password" placeholder="password" id="pwd" value={password} onChange={(e)=> setPassword(e.target.value)} required />
                           <p className='message' style={{textAlign:'center', color:'#af7443'}}>{message}</p>

           <button id="btn">Send</button>
          </form>
      </div>
    </div>
  </div>
</div>
  </>
   
        
       );
    }
   export default Contact