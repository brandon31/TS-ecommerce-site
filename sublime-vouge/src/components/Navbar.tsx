import {
  Navbar as NavbarBs,
  Nav,
  FormControl,
  Button,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import searchItems from "../data/items.json";
import Item from "./Item";
import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [searchValue, setSearchValue] = useState<string>("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modalClick = () => {
    window.location.pathname = "/shopping-cart";
  };

  return (
    <>
      <NavbarBs
        bg="white"
        className="w-100 shadow-sm"
        style={{ padding: "1rem" }}
        expand="lg"
      >
        <NavbarBs.Brand href="/" style={{ color: "lime" }}>
          Sublime<span style={{ color: "green" }}>Vouge</span>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ marginLeft: "4rem" }}>
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/cart" as={NavLink}>
              Cart
            </Nav.Link>
            <Nav.Link to="/products" as={NavLink}>
              Products
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-success"
            style={{ gap: "1rem", marginLeft: "4rem", width: "150px" }}
            onClick={handleShow}
          >
            Search
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Search Products</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-scroll-container">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Row className="d-flex flex-column" style={{}}>
                {searchItems
                  .filter((searchItem) =>
                    searchItem.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                  .map((item) => (
                    <Col
                      style={{
                        borderBottom: "1px solid gray",
                        marginTop: ".5rem",
                      }}
                      onClick={modalClick}
                    >
                      <Item {...item} />
                    </Col>
                  ))}
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Search
              </Button>
            </Modal.Footer>
          </Modal>

          {/* <Form
            className="d-flex"
            style={{ gap: "1rem", marginLeft: "2rem" }}
            onSubmit={handleSearch}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue && (
              <Button variant="outline-secondary" onClick={clearSearch}>
                Clear
              </Button>
            )}
            {searchValue && (
              <Row>
                {Products.filter((product) =>
                  product.name.toLowerCase().includes(searchValue.toLowerCase())
                ).map((item) => (
                  <Col>
                    <Item {...item} />
                  </Col>
                ))}
              </Row>
            )} */}
          {/* </Form> */}
        </NavbarBs.Collapse>
      </NavbarBs>
    </>
  );
}

export default Navbar;
