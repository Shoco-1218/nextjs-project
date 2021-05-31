import NavBar from './components/NavBar';
import MetaHead from './components/Head';
import Footer from "./components/Footer";
import Link from 'next/link';
import '../style.css';

// With class components
const initialState = {
  name: "",
  mobile: "",
  email: "",
  buy: "",
  sell: "",
  renst: "",
  unit: "",
  townhouse: "",
  house: "",
  bedrooms: "",
  comments: "",
  errorName: "",
  errorMobile: "",
  errorEmail: ""
};

class Contact extends React.Component{

  constructor(props){
    super(props);
    this.state = initialState;
  }

  handleChange = event => {
    const target = event.target;
    const isRadio = target.type === "radio";
    const isCheckbox = target.type === "checkbox";

    this.setState({
      [target.name]: isRadio || isCheckbox
      ? target.checked
      : target.value
    });
  };

  validation = () => {

    let errorName =  "";
    let errorMobile =  "";
    let errorEmail =  "";
    let regEx = /([0-9])+/;
    let mobile = this.state.mobile;
    let name = this.state.name;

    if(name.length < 5){
      errorName = "Please Enter with the valid name" ;
    }
    if(mobile.length < 10 || !(mobile.match(regEx)[0]) ){
      errorMobile = "Please Enter with the valid mobile number";
    }
    if(!(this.state.email.includes('@'))){
      errorEmail = "Please Enter with the valid email";
    }
    if(errorName || errorMobile || errorEmail){
      this.setState({
        errorName,
        errorMobile,
        errorEmail
      })
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validation();
    if(isValid){
      alert(this.state.name + "  Thank you so much for details.");
      document.forms["myForm"].submit();
      this.setState(initialState);
    }
  };


  render(){

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
            <form 
              id="myForm" 
              onSubmit = {this.handleSubmit}
              action = "/enquiryPost"
              method = "POST"
            >
              <fieldset>
                <div className="forms">
                  <label>*Name </label>
                  <br />  
                  <input 
                    name="name" 
                    id="name" 
                    onChange = {this.handleChange}
                    style={{marginBottom: '10px'}} 
                    placeholder="Your full name" 
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.errorName}
                  </div>
                </div>
                <div className="forms">
                  <label>*Mobile</label><br />  
                  <input 
                    name="mobile" 
                    id="mobile" 
                    onChange = {this.handleChange}
                    style={{marginBottom: '10px'}} 
                    placeholder="Your mobile phone number" 
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.errorMobile}
                  </div>
                </div>
                <div className="forms">
                  <label>*Email</label>
                  <br /> 
                  <input 
                    name="email" 
                    id="email" 
                    onChange = {this.handleChange} 
                    style={{marginBottom: '10px'}} 
                    placeholder="Your e-mail address" 
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.errorEmail}
                  </div>
                </div>
                <div className="forms">
                  <label>Do you want to Buy or Sell or Rent?</label>
                  <div id="radio">
                    Buy    
                    <input 
                      type="radio" 
                      name="buy" 
                      defaultValue="buy" 
                      className = "left"
                      onChange = {this.handleChange}
                    />
                    Sell
                    <input 
                      type="radio" 
                      name="sell" 
                      defaultValue="sell" 
                      className = "left"
                      onChange = {this.handleChange}
                    />
                    Rent
                    <input 
                      type="radio" 
                      name="rent" 
                      defaultValue="rent" 
                      className = "left"
                      onChange = {this.handleChange}
                    />
                  </div>
                </div>
                <div className="forms">
                  <label>What property types are you interested in?</label>
                  <div id="checkbox">
                    Unit
                    <input
                      type="checkbox" 
                      name="unit" 
                      className = "left"
                      onChange = {this.handleChange}
                    />
                    Townhouse
                    <input 
                      type="checkbox" 
                      name="townhouse" 
                      className = "left"
                      onChange = {this.handleChange}
                    />
                    House
                    <input 
                      type="checkbox" 
                      name="house" 
                      className = "left"
                      onChange = {this.handleChange} 
                    />
                  </div>
                </div>
                <div className="forms">
                  <label>How many bedrooms do you require?</label>
                  <br />
                  <select 
                    name="bedrooms" 
                    id="bedrooms"
                    onChange = {this.handleChange}
                  >
                    <option>
                      Choose from here
                    </option>
                    <option>
                      Studio
                    </option>
                    <option>
                      1 Bedrooms
                    </option>
                    <option>
                      2 Bedrooms
                    </option>
                    <option>
                      3+ Bedrooms
                    </option>
                  </select>
                </div>
                <div className="forms">
                  <label>Comments</label>
                  <br />
                  <textarea 
                    name="comments" 
                    rows={8} 
                    cols={50} 
                    id="comments" 
                    maxLength={1000} 
                    defaultValue={""} 
                    onChange = {this.handleChange}
                  />
                </div>
              </fieldset>
              <input 
                className="button submitBtn" 
                defaultValue="Submit" 
                type="submit"
                style={{borderRadius: '5px', background: '#273149', color: 'white'}} 
              />
            </form>
          </section>
        </main>
        <Footer />
      </div>
      </>
    );
  };
};

export default Contact;