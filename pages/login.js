import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';

import '../style.css';
import { useState } from 'react';


function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const[logMes, setLogmes] = useState("Log In");
  const[failed, setFailed] = useState("");

  function handleChange(e){
    let target = e.target;
  
    if(target.name === "name") {
      setName(target.value);
    }else if(target.name === "email") {
      setEmail(target.value);
    }else if(target.name === "password"){
      setPass(target.value);
    }
  }

  async function handleSubmit (e) {
    e.preventDefault();

    let data = {
      action: "login",
      name: name,
      email: email,
      password: password
    };

    let response = await fetch('http://localhost:3000/api/auth', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if(response.ok) {
      setLogmes("Successfully logged in");
      setFailed("");
    } else {
      setFailed("Failed to proceed. Please try it again");
    }
  }

  function handleLogout(e) {
    e.preventDefault();
    document.cookie = "logInCookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setLogmes("Logged out! Thank you.");
    return 
  }


  return(
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

        <main id="loginMain">
          <h1>{logMes}</h1>
          <div className="display">
            <div> </div>
            <div className="login">
              <form 
                method="POST"
                id = "myForm"
                onSubmit ={handleSubmit}
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
                <button 
                  type="submit"
                  id = "submitBtn"
                >
                  Log In
                </button>
                <p style={{ marginTop: '20px' }}>
                  Not a member yet?.....
                  <Link href="/register">
                    <a id = "hover">Register</a>
                  </Link>
                </p>
              </form>
              <form action="/logout" method="POST">
                <button 
                id="logout"
                onClick = {handleLogout}
                >
                  Log Out
                </button>
              </form>
            </div>
          </div>

        </main>

        <Footer />

      </div>

    </>
  );
}

export default Index
