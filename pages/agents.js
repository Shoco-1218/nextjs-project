import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';
import queryAsync from '../mysql';

import "../style.css"

export async function getServerSideProps(){

  let dbdata = await queryAsync(`
    SELECT * FROM agents LIMIT 6;
  `)

  let rows = JSON.parse(JSON.stringify(dbdata));

  return {
    props: {
      rows
    },
  }
}


function Index({ rows }) {

  let rowsMap = rows.map(row =>
    <div key = {row.id}>
      <img src={'static/' +row.agents_photo} alt="agen1" with="200" height="200" />
      <h4>{row.name}</h4>
      <p>{row.position}</p>
      <p><a href="#">{row.phone}</a></p>
      <p>{row.email}</p>
    </div>
  );

  return(
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

      <main>
        <div className="titleOfPage">
          <h1>Ultimo Agents</h1>
        </div>
        <div className = "grid-container">
          {rowsMap}
        </div>
        <div id = "agentMember">
        </div>
        <button type = "button" id = "agentBtn">More Agents</button>
      </main>
      <Footer />
    </div>
  </>
  );
}

export default Index;