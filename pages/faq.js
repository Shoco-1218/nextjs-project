import React from 'react';
import NavBar from './NavBar';
import MetaHead from './Head';
import Footer from "./Footer";
import Link from 'next/link';

import '../style.css'

function Index() {
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
            <h1>Frequently Asked Questions(FAQ)</h1>
          </div>

          <div className="accbox">
            {/* label 1 */}
            <input id="label1" className="inputclass" type="checkbox" />
            <label htmlFor="label1">Why should I list my property with Ultimo Real Estate?</label>
            <div className="insidebox">
              <p style={{fontSize: '15px', lineHeight: '1.6'}}>
                Ultimo Real Estate are just as keen as you to get your property leased or sold, and our ever-growing number of enquiries means that we can find the best tenant to match your requirements. We’re also always happy to work with other agents to increase the pool of prospective tenants, and ensure that you receive the maximum return for your property. We understand that property trusts like to work with multiple agents, and we’re more than happy to work with you on this. Just think of us as another string to your bow.
              </p>
            </div>
            <hr />

            {/* label 2 */}
            <input id="label2" className="inputclass" type="checkbox" />
            <label htmlFor="label2">Can I till sell or lease my property</label>
            <div className="insidebox">
              <p style={{fontSize: '15px', lineHeight: '1.6'}}>
                Yes. Ultimo Real Estate’s agents, buyers agents and the rest of the market have adapted to the new restrictions due to COVID-19. Virtual tours of homes, private inspections and online auctions are now the norm. Sellers can still sell via private sale too, as always.
              </p>
            </div>
            <hr />

            {/* label 3 */}
            <input id="label3" className="inputclass" type="checkbox" />
            <label htmlFor="label3">How do virtual or digital inspections work?</label>
            <div className="insidebox">
              <p style={{fontSize: '15px', lineHeight: '1.6'}}>
                Digital inspection allow real estate agents to use videos – either shot professionally or via smart phone walk-throughs – which would be available to renters and buyers via ‘Inspections’ sections of Buy and Rent listings on Ultimo Real Estate website.
              </p>
            </div>
            <hr />

            {/* label 4 */}
            <input id="label4" className="inputclass" type="checkbox" />
            <label htmlFor="label4">What if I can’t make my mortgage repayments?</label>
            <div className="insidebox">
              <p style={{fontSize: '15px', lineHeight: '1.6'}}>
                Due to COVID-19, most banks are allowing customers to pause their loan repayments for up to six months if they are experiencing financial hardship. Contact your broker to discuss this. You may be eligible for the government’s stimulus package. For free financial advice, contact the Sydney National Debt Helpline.
              </p>
            </div>
            <hr />
          </div>
        </main>
      <Footer />
      </div>

    </>
  );
}


export default Index;