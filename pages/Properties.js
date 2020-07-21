import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';
// import AddProperty from './AddProperty';

import "../style.css"

export default () => (
  <>
  <MetaHead />
  <div className = "App">
    <header className = 'elseHeader'>

      <div>
        <Link href="/">
          <a>
            <img  src="../static/estate-logo.svg" width="300" height="100" 
            alt="Ultimo Real Estate, Sydney, Australia" />
          </a>
        </Link>
      </div>

      <NavBar />
    </header>

    <main>
      <div className= "titleOfPage">
        <h1>Property of the Week</h1>
      </div>

      <div className= "flex">
        <div className= "grid-container-pro">
          @@@property@@@
        </div>
      </div>

      <div id = "addPropertySpace" className= "flex">
      </div>
      @@@addForm@@@
      {/* <AddProperty /> */}

    </main>
  
    <Footer />

  </div>

  </>
);
