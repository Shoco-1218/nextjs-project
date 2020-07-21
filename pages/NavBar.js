import Link from 'next/link';


const NavBar = () => (
  <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link  href="/dbproperty"><a>Property of the Week</a></Link></li>
          <li><Link href="/static/agents" ><a>Agents</a></Link></li>
          <li><Link href="/static/faq.html" ><a>FAQ</a></Link></li>
          <li><Link href="/static/contact.html"><a>Contact</a></Link></li>
          <li><Link href= "/static/login"><a>Login</a></Link></li>
        </ul>
      </nav>
)


export default NavBar;