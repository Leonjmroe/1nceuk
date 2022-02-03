import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import Logo from '../../images/1nce-logo.png';
import './core.css';

export default function Header() {
  
return (

<Navbar bg="light" variant="light" className="navbar">
    <Container>
      <Navbar.Brand href="#home">
        <img alt="" src={Logo} width="80" height="120"
             className="d-inline-block align-top" />
      </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Container>
  </Navbar>

)}

