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
   <div>
   
   
     <meta charSet="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>About Us</title>
     
     <link rel="stylesheet" href="css/main.css" />
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
     
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
     <div className="contact">
       <header>
         <h1>Contact<span> Us</span></h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt, vero reprehenderit dolore sed libero obcaecati natus cupiditate ab excepturi qui ullam facilis illo est! Velit totam amet impedit blanditiis! </p>
       </header>
       <div className="container">
         <div className="row">
           <div className="col-md-5 py-3 py-md-0">
             <div className="content-form">
               <section>
                 <i className="fa-solid fa-location-dot" />
                 <h2>address</h2>
                 <p>lorem ipsum dolor sit.<br />
                   lorem, ipsum dolor.<br />
                   lorem.</p>
               </section>
             <section>
               </section>
               <section>
                 <i className="fa-solid fa-phone" />
                 <h2>Phone</h2>
                 <p>123-456-7890</p>
               </section>
               <section>
               </section>
               <section>
                 <i className="fa-solid fa-envelope" />
                 <h2>E-mail</h2>
                 <p>lorem@temporary.net.in</p>
               </section>
             </div>
           </div>
           <div className="col-md-7 py-3 py-md-0">
      <form id="registration" onSubmit={Submit}>
             <input type="text" placeholder="Name" id="name" value={name} onChange={(e)=> setName(e.target.value)} required />
             <input type="email" placeholder="Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                           <input type="password" placeholder="password" id="pwd" value={password} onChange={(e)=> setPassword(e.target.value)} required />
             
             <button id="submit">Send</button>
             </form>
             <p className='message'>{message} </p>

            </div>

         </div>
       </div>
     </div>

    </div>
   
        
       );
    }
   export default Contact