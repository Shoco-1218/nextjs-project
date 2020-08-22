import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';
import queryAsync from '../mysql';

import { useState, useEffect } from 'react';
import "../style.css"

import jwt from 'jsonwebtoken';


async function getProperties() {
  let dbdata = await queryAsync(`
  SELECT property.id, property.address, property.image_path, property.inspection, 
  property.bed, property.shower, property.car, agents.name, agents.agents_photo 
  FROM property 
  JOIN agents ON property.agent_id = agents.id;
  `);

  return JSON.parse(JSON.stringify(dbdata));
}

function checkCookies(context) {
  const regex = /logInCookie\=([A-Za-z0-9\.\_\-]+)/;
  let decoded;
  let agentLoggedIn = false;

  try {
    let cookie = context.req.headers.cookie;
    let token = cookie.match(regex)[1];
    decoded = jwt.verify(token, 'ShokoDidIt');
    if(decoded.role === "agent") {
      agentLoggedIn = true;
      return agentLoggedIn;
    }else{
      return agentLoggedIn;
    }
  } catch {
    return agentLoggedIn;
  }
}

export async function getServerSideProps(context) {

  let rows = await getProperties();
  let loggedIn = checkCookies(context);

  return {
    props: {
      rows,
      loggedIn
    },
  }
};


function Index({ rows, loggedIn }) {

  const [message, setMessage] = useState("");

  let addForm = !loggedIn ? null :
  <>
    <div>{message}</div>
    <h2 >Add more property</h2>
      <form
        action="/properties"
        method="POST"
        id="moreProperty"
        onSubmit = {handleAddProperty}
      >
        <div className="marginTop">
          <label htmlfo="address">Address of Property</label>
          <br />
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Property Address"
            size="36"
            required
            onChange = {handleChange}
          />
        </div>
        <div className="marginTop">
          <label htmlfo="inspection">Inspection Date</label>
          <br />
          <input
            id="inspection"
            type="text"
            name="inspection"
            placeholder="Open xx/xx/ xx:xxam/pm"
            size="36"
            required
            onChange = {handleChange}
          />
        </div>
        <div className="marginTop">
          <label htmlfo="image_path">Title of the Image File</label>
          <br />
          <input
            id="image_path"
            type="text"
            name="image_path"
            placeholder="example.jpg"
            size="36"
            required
            onChange = {handleChange}
          />
        </div>
        <div className="marginTop">
          <label htmlfo="agentName">Agent's name</label>
          <input
            id="agentName"
            type="text"
            name="agentName"
            placeholder="Full name"
            size="36"
            required
            onChange = {handleChange}
          />
        </div>
        <div className="marginTop">
          <label >The number of Bed Rooms</label>
          <div id="radio">
            1
            <input 
              type="radio" 
              name="bed" 
              value="1"
              onChange = {handleChange}
            />
            2
            <input 
              type="radio" 
              name="bed" 
              value="2"
              onChange = {handleChange}
            />
            3
            <input 
              type="radio" 
              name="bed" 
              value="3"
              onChange = {handleChange} 
            />
            4
            <input 
              type="radio" 
              name="bed" 
              value="4"
              onChange = {handleChange}
            />
            5
            <input 
              type="radio" 
              name="bed" 
              value="5"
              onChange = {handleChange}
            />
          </div>
        </div>
        <div className="marginTop">
          <label >The number of Shower Rooms</label>
          <div id="radio">
            1
            <input 
              type="radio" 
              name="shower" 
              value="1"
              onChange = {handleChange} 
            />
            2
            <input 
              type="radio" 
              name="shower" 
              value="2"
              onChange = {handleChange}
            />
            3
            <input 
              type="radio" 
              name="shower" 
              value="3"
              onChange = {handleChange}
            />
            4
            <input 
              type="radio" 
              name="shower" 
              value="4"
              onChange = {handleChange} 
            />
            5
            <input 
              type="radio" 
              name="shower" 
              value="5"
              onChange = {handleChange}
            />
          </div>
        </div>
        <div className="marginTop">
          <label >The number of Car Parking</label>
          <div id="radio">
            1
            <input 
              type="radio" 
              name="car" 
              value="1" 
              onChange = {handleChange} 
            />
            2
            <input 
              type="radio" 
              name="car" 
              value="2"
              onChange = {handleChange} 
            />
            3
            <input 
              type="radio" 
              name="car" 
              value="3"
              onChange = {handleChange}
            />
            4
            <input 
              type="radio" 
              name="car" 
              value="4" 
              onChange = {handleChange}
            />
            5
            <input 
              type="radio" 
              name="car" 
              value="5" 
              onChange = {handleChange}
            />
          </div>
        </div>
        <button type='submit' id="addPropertyBtn">OK</button>
      </form>
    </>;

  const [data, setData] = useState(
    {
      address: "",
      inspection: "",
      image_path: "",
      agentName: "",
      car: "",
      shower: "",
      bed: ""
    }
  )

  function handleChange(e) {
    let target = e.target;

    setData(prev => ({
      ...prev,
      [target.name]: target.value
    })
    );

  }

  async function handleAddProperty(e) {
    e.preventDefault();
    let response = await fetch('http://localhost:3000/api/moreproperties', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if(response.ok) {
      setMessage(<h3 style = {{color: "red", textAlign: "center"}}>
          Successfully added!
        </h3>
      )
    }
  }

  let rowsMap = rows.map(row =>

    <div className="imgs" key={row.id} >
      <br />
      <p className="right">Ultimo Real Estate</p>
      <br />
      <a target="_blank" href={"./gallery?id=" + row.id}>
        <img src={"static/" + row.image_path} alt="Home1"
          id="cardImg" />
      </a>
      <br />
      <h5 className="obi">
        {row.name}
        <a href="#">
          <img src={"static/" + row.agents_photo} width="70px;"
            height="70px;" style={{ borderRadius: '50%' }} />
        </a>
      </h5>
      <br />
      <h4>{row.address}</h4>
      <br />
      <p className="icons">
        <img src="static/bed.png" />{row.bed}
        <img src="static/shower.png" />{row.shower}
        <img src="static/car.png" />{row.bed}
      </p>
      <p className="inspe">
        <img src="static/planner.png" /> Inspection : {row.inspection}
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
          </div>
          <div className="addProperty">
              {addForm}
          </div>
        </main>
        <Footer />
      </div>

    </>
  )
};


export default Index;