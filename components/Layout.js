import { Container, Navbar, Nav } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <div className="">
        {/* <Navbar
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: "#ff6d2d" }}
        >
          <Container>
            <Navbar.Brand className="mx-auto text-white" href="#home">
              Usage Based Billing Vendors
            </Navbar.Brand>
          </Container>
        </Navbar> */}
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="dark"
          className="border-bottom"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link className="text-dark" href="">
                  Home
                </Nav.Link>
                <Nav.Link className="text-dark" href="">
                  About
                </Nav.Link>
                <Nav.Link className="text-dark" href="">
                  Contribute
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="">{children}</div>
      </div>
    </>
  );
}
