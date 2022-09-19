import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'

function Navigation({user}) {


    const navigate = useNavigate();

    const navigateToUser = () => {
      
      navigate(`/UserList/${user}`);
    };
 
  return (
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={navigateToUser}>Users</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     
    
  );
}

export default Navigation 