import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';
import queryAsync from '../mysql.js';

import "../style.css"
import React, { useState } from 'react';

export async function getServerSideProps(){

  let dbdata = await queryAsync(`
    SELECT * FROM agents LIMIT 6 ;
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
      <img 
        src={'static/' +row.agents_photo} 
        alt="agen1" 
        with="200" 
        height="200"
      />
      <h4>{row.name}</h4>
      <p>{row.position}</p>
      <p>{row.phone}</p>
      <p>{row.email}</p>
    </div>
  );

  const [moreAgent, setMoreAgent] = useState();
  let dataMap;

  function handleClicked(){
    fetch('http://localhost:3000/api/moreagents' )
    .then( res => res.json())
    .then( json => {
      dataMap = json.rows.map(row =>
        <div key = {row.id}>
          <img 
            src={'static/' +row.agents_photo} 
            alt="agen1" 
            with="200" 
            height="200" 
          />
          <h4>{row.name}</h4>
          <p>{row.position}</p>
          <p>{row.phone}</p>
          <p>{row.email}</p>
          </div>
      );

      setMoreAgent(prev => prev.concat(dataMap));
    })
    .catch(err => { console.error("Error: ", err) }) 
  }


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
          {moreAgent}
        </div>
        <button 
          type = "button" 
          id = "agentBtn"
          onClick = {handleClicked}
        >
          More Agents
        </button>
      </main>
      <Footer />
    </div>
  </>
  );
}

export default Index;