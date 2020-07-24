import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';

import '../style.css';

function Index(){
  return (
    <>

    <MetaHead />
    <div className="App">
      <header className='elseHeader'>
        <div>
          <Link href="/">
            <a>
              <img src="../static/estate-logo.svg" width="300" height="100"
                alt="Ultimo Real Estate, Sydney, Australia" />
            </a>
          </Link>
        </div>
        <NavBar />
      </header>

      <main id = "loginMain">
        <h1>Register</h1>
        <div className="display">
          <div> </div>
          <div className="login"> 
            <form action="/login" method="POST">
              <div className="loginForm">
                <label htmlFor="name">Name</label><br />
                <input type="text" id="name" name="name" placeholder="your full name" required />
              </div>
              <div className="loginForm">
                <label htmlFor="email">Email address</label><br />
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="loginForm">
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" placeholder="Enter 6 characters or more" required />
              </div>
              <button type="submit">Register</button>
              <p style={{marginTop: '20px'}}>
                Already have an account?.....
                <Link href="/login" >
                  <a >Log In</a>
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
