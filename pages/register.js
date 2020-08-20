import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';

import '../style.css';
import { useState } from 'react';

function Index(){

  const [registerMes, setRegisterMes] = useState(["Register"]);
  const [failed, setFailed] = useState([""]);

  const [name, setName] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, setPass] = useState([""]);

  function handleChange(e){
    let target = e.target;

    if(target.name == "name") {
      setName(target.value);
    }else if(target.name == "email") {
      setEmail(target.value);
    }else if(target.name == "password"){
      setPass(target.value);
    }

  }

  async function handleSubmit(e){
    e.preventDefault();
    let data = {
      action: "register",
      name: name,
      email: email,
      password: password
    }

    let response = await fetch('http://localhost:3000/api/auth', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if(response.ok) {
      setRegisterMes("HAHAHA Registered! ");
      setFailed("");
      document.querySelector("#myForm").reset();
    } else {
      setFailed("Failed to register. Please try it again");
      document.querySelector("#password").reset();
    }
  }

  return (
    <>

    <MetaHead />
    <div className="App">
      <header className='elseHeader'>
        <div>
          <Link href="/">
            <a>
              <img 
                src="../static/estate-logo.svg" 
                width="300" height="100"
                alt="Ultimo Real Estate, Sydney, Australia" 
              />
            </a>
          </Link>
        </div>
        <NavBar />
      </header>

      <main id = "loginMain">
      <h1>{registerMes}</h1>
        <div className="display">
          <div> </div>
          <div className="login"> 
            <form 
              action="/register" 
              method="POST"
              id = "myFormnpm"
              onSubmit = {handleSubmit}
            >
              <h4 style = {{color: "red"}}>{failed}</h4>
              <div className="loginForm">
                <label htmlFor="name">Name</label>
                <br />
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="your full name"
                  onChange = {handleChange} 
                  required 
                />
              </div>
              <div className="loginForm">
                <label htmlFor="email">Email address</label>
                <br />
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="you@example.com" 
                  onChange = {handleChange}
                  required 
                />
              </div>
              <div className="loginForm">
                <label htmlFor="password">Password</label>
                <br />
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Enter 6 characters or more" 
                  onChange = {handleChange}
                  required 
                />
              </div>
              <button type="submit">Register</button>
              <p style={{marginTop: '20px'}}>
                Already have an account?.....
                <Link href="/login" >
                  <a id = "hover">Log In</a>
                </Link> 
              </p>
            </form>
          </div>
        </div>

      </main>

      <Footer />

    </div>

    </>
  );
}

export default Index;
