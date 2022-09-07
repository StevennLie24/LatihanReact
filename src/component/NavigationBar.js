import { Navbar, Container, Nav } from "react-bootstrap"
import logo from "../assets/images/bg/logo.png"

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <a href="/" className="d-flex align-items-center p-0 text-dark">
          <img alt="logo" src={logo} width="30px" />
          <span className="ml-4 h5 font-weight-bold text-white">Bookworm</span>
        </a>
        <Nav>
          <Nav.Link href="#novel">Novel</Nav.Link>
          <Nav.Link href="#manga">Manga</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
