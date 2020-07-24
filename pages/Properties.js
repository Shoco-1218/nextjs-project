import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';
import queryAsync from '../mysql';
// import AddProperty from './AddProperty';

import "../style.css"

export async function getServerSideProps() {

  let dbdata = await queryAsync(`
    SELECT property.id, property.address, property.image_path, property.inspection, 
    property.bed, property.shower, property.car, agents.name, agents.agents_photo 
    FROM property 
    JOIN agents ON property.agent_id = agents.id;
  `);

  let rows = JSON.parse(JSON.stringify(dbdata));

  return {
    props: {
      rows
    },
  }
};


function Index({ rows }) {

  let rowsMap = rows.map(row =>

    <div className="imgs" key={row.id} >
      <br />
        <p className="right">Ultimo Real Estate</p>
        <br />
        <a target="_blank" href={"./gallery?id=" + row.id}>
          <img src={"static/" + row.image_path} alt="Home1" 
          style={{width: '100%', height: '242px'}} />
        </a>
        <br />
        <h5 className = "obi">
          {row.name}
          <a href = "#">
            <img src = {"static/" + row.agents_photo} width = "70px;" 
            height="70px;" style = {{borderRadius: '50%'}} />
          </a>
        </h5>
        <br />
        <h4>{row.address}</h4>
        <br />
        <p className = "icons">
          <img src = "static/bed.png" />{row.bed}
          <img src = "static/shower.png" />{row.shower}
          <img src = "static/car.png" />{row.bed}
        </p>
        <p className = "inspe">
          <img src = "static/planner.png" /> Inspection : {row.inspection}
        </p>
    </div>
  );

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

        <main>
          <div className="titleOfPage">
            <h1>Property of the Week</h1>
          </div>

          <div className="flex">
            <div className="grid-container-pro">
              {rowsMap}
            </div>
            {/* Add property */}
          </div>
        </main>
        <Footer />
      </div>

    </>
  )
};


export default Index;