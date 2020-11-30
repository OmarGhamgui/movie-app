import React, {  useRef } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  DropdownButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = (props) => {
  const tit = useRef("");
  const SearchByKey = () => {
    props.Search(tit.current.value);
  };
  const setValues = () => {
    let name = prompt("movie name");
    let desc = prompt("movie description");
    let rating = prompt("movie rating");
    let url = prompt("link of movie image");
    props.AddToMovieList(name, desc, rating, url);
  };

  return (
    <div>
      <>
        <Navbar bg="danger" expand="lg">
          <Link to="/movie-app" style={{ width: 50 }}>
            {" "}
            <img
              height="100%"
              width="100%"
              className="mr-sm-3"
              src="https://seeklogo.net/wp-content/uploads/2017/06/fox-movies-logo.png"
              alt=""
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Link
              to="/movie-app"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Nav
                className="mr-3 ml-5"
                style={{ fontSize: "23px", fontFamily: "cursive" }}
              >
                Home of Newest Movies
              </Nav>
            </Link>
            <Nav.Link
              style={{
                fontSize: "23px",
                fontFamily: "cursive",
                color: "#452529",
                marginRight: "25px",
              }}
              href="#home"
              onClick={() => setValues()}
            >
              Add Movies
            </Nav.Link>
            <Form inline>
              <FormControl
                style={{ width: 500 }}
                type="text"
                placeholder="Movie Name .."
                className="mr-sm-3 btnd my-2"
                ref={tit}
              />
              <DropdownButton
                as={ButtonGroup}
                key="1"
                className="mr-1 my-2"
                variant="light"
                title={
                  props.Rating === 0
                    ? "Choose a rate"
                    : `Rating: ${props.Rating}`
                }
              >
                {[1, 2, 3, 4, 5].map((e) => (
                  <div key={e}>
                    <Dropdown.Item
                      key={e}
                      onClick={(event) => {
                        props.SearchR(event.target.innerHTML);
                      }}
                    >
                      {e}
                    </Dropdown.Item>
                  </div>
                ))}
              </DropdownButton>
              <Button onClick={SearchByKey} variant="light">
                Search
              </Button>{" "}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    </div>
  );
};
export default Header;
