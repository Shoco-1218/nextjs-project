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

      <main className = "contact-main">

      <section id="col1">
        <div className="titleOfPage">
          <h1>Contact</h1>
        </div>
        <ul>
          <li><strong>Ultimo Real Estate</strong></li>
          <li>20 Jones Street</li>
          <li>ULTIMO NSW 2007</li>
        </ul>
        <ul>
          <li><strong>Mob: +61 123 456 789</strong></li>
          <li>Tel: +612 1234 5678</li>
          <li>info@ultimorealestate.com.au</li>
        </ul>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6624.85817291638!2d151.19285829205285!3d-33.87860141454631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae2f6b3e5fb7%3A0xf97500fd5776ca34!2sJones%20St%2C%20Sydney%20NSW!5e0!3m2!1sen!2sau!4v1581408180870!5m2!1sen!2sau" width={450} height={450} allowFullScreen />
        <br />
      </section>

      <section id="col2">
        <div className="titleOfPage">
          <h1>Property Enquiry</h1>
        </div>

        <form action="#" id="myForm">
          <fieldset>
            <div className="forms">
              <label>*Name </label><br />  
              <input name="name" id="name" maxLength={30} tabIndex={1} style={{marginBottom: '10px'}} placeholder="Your full name" />
              <i className="fas fa-check-circle" />
              <i className="fas fa-exclamation-circle" /><br />
              <small>Error message</small>
            </div>
            <div className="forms">
              <label>*Mobile</label><br />  
              <input name="mobile" id="mobile" maxLength={30} tabIndex={2} style={{marginBottom: '10px'}} placeholder="Your mobile phone number" />
              <i className="fas fa-check-circle" />
              <i className="fas fa-exclamation-circle" /><br />
              <small>Error message</small>
            </div>
            <div className="forms">
              <label>*Email</label><br /> 
              <input name="email" id="email" maxLength={30} tabIndex={3} style={{marginBottom: '10px'}} placeholder="Your e-mail address" />
              <i className="fas fa-check-circle" />
              <i className="fas fa-exclamation-circle" /><br />
              <small>Error message</small>        
            </div>
            <div className="forms">
              <label>Do you want to Buy or Sell or Rent?</label>
              <i className="fas fa-check-circle" />
              <i className="fas fa-exclamation-circle" /><br />
              <small>Error message</small>   
              <div id="radio">
                Buy    
                <input type="radio" name="buy-sell-rent" defaultValue="buy" tabIndex={4} 
                className = "left"/>
                Sell   
                <input type="radio" name="buy-sell-rent" defaultValue="sell" tabIndex={5} 
                className = "left"/>
                Rent   
                <input type="radio" name="buy-sell-rent" defaultValue="rent" tabIndex={6} 
                className = "left"/>    
              </div> 
            </div>
            <div className="forms">
              <label>What property types are you interested in?</label>
              <i className="fas fa-check-circle" />
              <i className="fas fa-exclamation-circle" /><br />
              <small>Error message</small> 
              <div id="checkbox">
                Unit 
                <input type="checkbox" name="unit" className = "left"/>
                Townhouse
                <input type="checkbox" name="townhouse" className = "left" />
                House
                <input type="checkbox" name="house" className = "left" />
              </div>
            </div>
            <div className="forms">
              <label>How many bedrooms do you require?</label>
              <i className="fas fa-check-circle" />
              <i className="fas fa-exclamation-circle" /><br />
              <small>Error message</small><br />
              <select name="bedrooms" id="bedrooms">
                <option value={0}>Choose from here</option>
                <option value="studio">Studio</option>
                <option value={1}>1 Bedroom</option>
                <option value={2}>2 Bedrooms</option>
                <option value="3+">3+ Bedrooms</option>
              </select>           
            </div>
            <div className="forms">
              <label>Comments</label>
              <i className="fas fa-check-circle" />
              <i className="fas fa-exclamation-circle" /><br />
              <small>Error message</small><br />
              <textarea name="comments" rows={8} cols={50} 
              id="comments" maxLength={1000} defaultValue={""} />
            </div>
          </fieldset>
          <input className="button submitBtn" defaultValue="Submit" 
          style={{borderRadius: '5px', background: '#273149', color: 'white'}} />
          {/* /*type="submit"* / */}
          {/* // onClick="return validation()"  */}
        </form>

      </section>
      </main>

      <Footer />

    </div>

    </>
  );
}

export default Index;