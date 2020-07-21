import Link from 'next/link';

const Footer = () => (
  <footer>
    <ul>
      <li>&copy; 2020 Ultimo Real Estate, Inc. Shoko.</li>
      <li>
        <Link href="www.facebook.com/UltimoRealEstate">
        <a>
          <img src="/static/facebook.png" width="30" height="30" 
          alt="Ultimo Real Estate on Facebook"/>
        </a>
        </Link>
      </li>
      <li>
        <Link href="www.instagram.com/UltimoRealEstate">
        <a>
          <img src="/static/instagram.png" width="30" height="30" 
          alt="Ultimo Real Estate on Instagram"/>
        </a>
        </Link>
      </li>
      <li>
        <Link href="www.twitter.com/UltimoRealEstate">
        <a>
          <img src="/static/twitter.png" width="30" height="30" 
          alt="Ultimo Real Estate on Twitter"/>
        </a>
        </Link>
      </li>
      <li>
        <Link href="legals.html">
        <a>Legals</a>
        </Link>
      </li>
    </ul>
  </footer>
)

export default Footer;