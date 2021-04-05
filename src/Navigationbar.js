import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Button,NavDropdown} from 'react-bootstrap';

function Navigationbar(){
return(
<Navbar bg="transparent" expand="lg">
  <Navbar.Brand href="#home"><img src="/images/logo.png" width="35px" height="35px"></img></Navbar.Brand>
<Navbar.Brand href="#home">AttainU</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="mr-auto">

  <NavDropdown title="Course" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Course Details</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Live Batches</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Student Projects</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.4">FAQ</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Placements" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">placement details</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">placement stories</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Hire" id="basic-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Hire from AttainU</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Verify Student status</NavDropdown.Item>
  </NavDropdown>
</Nav>
<Button variant="outline-warning">Apply</Button>{' '}
</Navbar.Collapse>
</Navbar>
)
}
export default Navigationbar;
