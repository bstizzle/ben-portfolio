
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>
      {children}
    </a>
  </Link>

const AppNavbar = () => {

  return(
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">
          BenStein
        </AppLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <AppLink href="/portfolios" className="nav-link mr-3">
              Portfolio
            </AppLink>
            <AppLink href="/forum/categories" className="nav-link mr-3">
              Forum
            </AppLink>
            <AppLink href="/cv" className="nav-link mr-3">
              Cv
            </AppLink>
          </Nav>
          <Nav>
            <AppLink href="/register" className="nav-link mr-3">
              Sign Up
            </AppLink>
            <AppLink href="/login" className="nav-link mr-3 btn btn-success bg-green-2 bright">
              Log In
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbar;