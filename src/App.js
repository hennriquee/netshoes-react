import Main from "./paginas/main";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function App() {
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-dark">
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                src='https://logodownload.org/wp-content/uploads/2020/02/netshoes-logo-5.png'
                alt="Logo"
                height="40"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link style={{ color: 'white' }} href="/">Página Inicial</Nav.Link>
                <Nav.Link style={{ color: 'white' }} href="./produtos">Produtos</Nav.Link>
                <Nav.Link style={{ color: 'white' }} href="https://www.instagram.com/henrique_nns/">Contato</Nav.Link>
                <Nav.Link style={{ color: 'white', paddingLeft:'850px' }} href="./usuarios">Usuários</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="page-content"/>
      <Main />
  
      
    </>
  );
}

export default App;



