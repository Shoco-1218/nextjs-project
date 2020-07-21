import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";

import "../style.css"

export default () => (
  <>
  <MetaHead />
  <div className = "App">
    <div className = "wrapper">
      <header>
        <div>
          <Link href="/">
            <a><img  src="../static/estate-logo.svg" width="300" height="100" 
            alt="Ultimo Real Estate, Sydney, Australia" /></a>
          </Link>
        </div>
        <NavBar />
      </header>

      <div id = "box">
        <h1>
          A new appporh for your <br /> 
          future property.
        </h1>
      </div>
    
      <main>
        <div className = "mainpic">
            <img src = "/static/homepic.jpg" height = "100%" width = "auto" alt = "main picture" style={{margin: '0 auto'}} />
            <p>Let's meet!</p>
            <h2>Ready to chat?<img src = "/static/chatarrow.png" width = "50px" height = "50px" alt = "arrow" id = "arrow" /></h2>
          </div>
        </main>
      </div>
    
      <div className = "section">
        <div>
          <h2>
            We've helped <br />
            over million people <br /> 
            buy and sell.
          </h2>
          <button>Learn More About Us</button>
        </div>
        <div>
          <img src = "/static/section-pic.jpg" height = "60%" width = "auto" 
          alt = "section picture" />
        </div>
      </div>

      <Footer />
      
    </div>

  </>
);