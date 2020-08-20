import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';
import queryAsync from '../mysql';

import '../style.css';

import React, {useState, useEffect} from 'react';


export async function getServerSideProps(req, res){

  let idNumber = parseInt(req.query.id);
  let query = 
    "SELECT property.id, property.address, property.image_path,property.inspection, property.bed, property.shower, property.car, agents.name, agents.agents_photo FROM (property JOIN agents ON property.agent_id = agents.id) WHERE property.id = "
    + idNumber;
  let dbdata = await queryAsync(query);

  let rows = JSON.parse(JSON.stringify(dbdata));

  
  return {
    props:{
      rows
    },
  }
}

function Index({ rows }){

  let row = rows[0].image_path;
  const [imgSrc, setSrc] = useState(row);
  const [btn, setBtn] = useState("stopbtn.png");
  const [isPlay, setIsPlay] = useState(true);

  function toggle()
  {
    btn == "stopbtn.png" ? setBtn("gobtn.png") : setBtn("stopbtn.png");
    setIsPlay(!isPlay);
  }

  let thisAd = 0;
  const adImage = [
    rows[0].image_path,
    "inside1.jpg",
    "inside2.jpg",
    "inside3.jpg",
    "inside4.jpg",
    "inside5.jpg"
  ];
  let timeHandle = null;
  
  useEffect(() => {
    if (isPlay) {
      timeHandle = setInterval(() => {
        if(thisAd === adImage.length){
          thisAd = 0;
        }
        setSrc(adImage[thisAd]);
        thisAd++;
      }, 1000)
    } else {
      clearInterval(timeHandle);
    }
    return () => clearInterval(timeHandle);
  }, [isPlay]); 

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

      <div className = "subnav">
        <Link href = "./properties">
          <a>
            <p>&lt; back</p>
          </a>
        </Link>
        <p> Property : {rows[0].address}</p>
      </div>

      <main className = "gallery-main">
        <div className="container">
          <ul id = "btns">
            <li>
              <img 
                src={"../static/" + btn}
                alt="slide animation starts" 
                onClick = {() => toggle()}
              />
            </li>
          </ul>
          <a>
            <img 
              src={"../static/" + imgSrc} 
              id="adBanner" 
              style={{width: '100%'}} 
              alt="house pic"
            />
          </a>
        </div>

        <div className="row">
          <div className="column">
            <img 
              className="demo cursor" 
              src={"../static/" + rows[0].image_path}
              style={{height: '150px', width: '100%'}} 
              id="rowImages" 
              alt="Outside" 
              onClick={() => setSrc(rows[0].image_path)}
            />
          </div>
          <div className="column">
            <img 
              className="demo cursor" 
              src="../static/inside1.jpg" 
              style={{height: '150px', width: '100%'}} 
              id="rowImages" 
              alt="Inside design" 
              onClick={() => setSrc("inside1.jpg")}
            />
          </div>
          <div className="column">
            <img 
              className="demo cursor" 
              src="../static/inside2.jpg" 
              style={{height: '150px', width: '100%'}} 
              id="rowImages" 
              alt="Bed Room" 
              onClick={() => setSrc("inside2.jpg")}
            />
          </div>
          <div className="column">
            <img 
              className="demo cursor" 
              src="../static/inside3.jpg" 
              style={{height: '150px', width: '100%'}} 
              id="rowImages" 
              alt="Bath Room"
              onClick={() => setSrc("inside3.jpg")}
            />
          </div>
          <div className="column">
            <img 
              className="demo cursor" 
              src="../static/inside4.jpg" 
              style={{height: '150px', width: '100%'}} 
              id="rowImages" 
              alt="Bed Room" 
              onClick={() => setSrc("inside4.jpg")}
            />
          </div>
          <div className="column">
            <img 
              className="demo cursor" 
              src="../static/inside5.jpg" 
              style={{height: '150px', width: '100%'}} 
              id="rowImages" 
              alt="kitchen"
              onClick={() => setSrc("inside5.jpg")} 
            />
          </div>
        </div>

        <div className="caption-container">
          <p id="caption" />
        </div>

        <h2 className="center">{rows[0].address}</h2>
        <br />

        {/* description of houses */}
        <div id="flex">
          {/* left side */}
          <div id="column1">
            <p className="icons">
              <img src="../static/bed.png" alt="icons" />
              {rows[0].bed}
              <img src="../static/shower.png" alt="icons" />
              {rows[0].shower}
              <img src="../static/car.png" alt="icons" />
              {rows[0].car}  |  
              <img src="../static/planner.png" alt="icons" />
              {rows[0].inspection}
            </p>
            <p className="margin">
              Living is easy in this freshly schemed freestanding home in a quiet cul-de-sac a short stroll Featuring a 15m street frontage and double parking, the three bedroom home's fluid villa-like layout is ideal for the young family or downsizer with sun-filled living space opening to a landscaped north facing garden. One of only a handful of homes in a peaceful enclave with no-through traffic, the immaculately presented home is 850m to nearest station and town centre with close proximity to historic sydney Park. In the heart of the inner west, sydney is on the brink of a boom with close proximity, excellent transport links and great schools.
              <br /><br />
              - Double fronted freestanding home in a quiet cul-de-sac
              <br />
              - Modern light-filled interiors, easy indoor/outdoor flow
              <br />
              - 3 bedrooms with built-ins, 2 with a tranquil garden outlook
              <br />
              - Large main bedroom, 2 way bathroom and a powder room
              <br />
              - Spacious living and dining featuring easycare timber floors
              <br />
              - Terrace and a level landscaped garden bathed in sunshine
              <br />
              - Granite kitchen with Smeg gas cooker, plentiful bench space
              <br />
              - Full size laundry, downlights, plush carpeting
              <br />
              - Lock-up garage plus off street parking, stroll to city buses
              <br />
              - Walk to the soon-to-be-completed Aquatic Centre
              <br />
            </p>
          </div>

          {/* right side */}
          <div id="column2">
            <ul>
              <li>
                <p style={{marginTop: '10px'}}>
                  {rows[0].name}
                </p>
              </li>
              <li>
                <a href="#">
                  <img src={"../static/"+ rows[0].agents_photo} width={70} height={70} 
                  style={{borderRadius: '50%', margin: '10px'}} 
                  alt="agency-photo" />
                </a>
              </li>
              <li>
                <button>
                  <img src="../static/phone.png" alt="phone-icon" />
                  call 
                </button>
              </li>
              <li>
                <p style={{paddingTop: '30px'}}>
                  Ultimo Real Estate
                </p>
              </li>
            </ul>
            <div className="gmap margin text">
              <p>
                <img 
                  src="../static/house.png" 
                  alt="icons" 
                  className= "rightAbit" 
                />
                  | {rows[0].address}
              </p>
              <br />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.5144606993504!2d151.20549893317832!3d-33.87740160551429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3cc9d8039b%3A0x1b0bd5dd57af495f!2sWorld%20Square!5e0!3m2!1sen!2sau!4v1585693877945!5m2!1sen!2sau" 
                width={300} 
                height={300} 
                allowFullScreen aria-hidden="false" 
                tabIndex={0} 
              />
            </div>
          </div>
        </div>

      </main>

      <Footer />

    </div>
    </>
  )
}

export default Index;