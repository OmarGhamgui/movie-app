import React, { useState, useEffect, useRef } from "react";
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

const Header = (props) => {
  const tit = useRef("");
  const SearchByKey = () => {
    props.Search(tit.current.value);
  };
  const setvalues = () => {
    let name = prompt("movie name");
    let desc = prompt("movie description");
    let rating = prompt("movie rating");
    let url = prompt("link of movie image");
    props.AddToMovieList(name, desc, rating, url);
  };
  const [x, setx] = useState("Choose By Rating");
  const handleClick = (y) => {
    props.SearchR(y.target.innerHTML)
    setx(`Rating : ${props.Rating}`);
  };

  return (
    <div>
      <>
        <Navbar bg="danger" expand="lg">
          <img
            height="5%"
            width="4%"
            className="mr-sm-3"
            src="https://seeklogo.net/wp-content/uploads/2017/06/fox-movies-logo.png"
            alt=""
          />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto ml-5"
              style={{ fontSize: "23px", fontFamily: "cursive" }}
            >
              {" "}
              Home of Newest Movies
            </Nav>
            <Nav.Link
              style={{
                fontSize: "23px",
                fontFamily: "cursive",
                color: "#452529",
                marginRight: "25px",
              }}
              href="#home"
              onClick={() => setvalues()}
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
                title={x}
              >
                {[1, 2, 3, 4, 5].map((e) => (
                  <div key={e}>
                    <Dropdown.Item
                      key={e}
                      eventKey={e}
                      onClick={(y) => handleClick(y)}
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
