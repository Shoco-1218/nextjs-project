import Link from 'next/link';


const NavBar = () => (
  <nav>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link  href="/properties"><a>Property of the Week</a></Link></li>
          <li><Link href="/agents" ><a>Agents</a></Link></li>
          <li><Link href="/faq" ><a>FAQ</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
          <li><Link href= "/login"><a>Login</a></Link></li>
        </ul>
      </nav>
)


export default NavBar;