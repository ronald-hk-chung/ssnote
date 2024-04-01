import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

function MainNav({ setColab, setGithub, contentDict}) {
  const [showNav, setShowNav] = useState(false);

  const animationSequence = [
    "Welcome to Self Study Notebook",
    3000,
    "Focusing on Deep-Learning with PyTorch",
    3000,
    "Authored by Ronald Chung",
    3000,
    "Happy Coding!",
    1000,
  ];

  const HeadAnimation = () => {
    return (
      <TypeAnimation
        sequence={animationSequence}
        speed={50}
        omitDeletionAnimation={true}
        repeat={Infinity}
      />
    );
  };

  const handleNav = (notebook) => {
    setShowNav(!showNav);
    setGithub(notebook["github"]);
    setColab(notebook["colab"]);
  };

  const createNBList = (content) => {
    return (
      <React.Fragment key={content}>
        <Nav.Link href={contentDict[content]["href"]} onClick={handleNav}>
          {contentDict[content]['name']}
        </Nav.Link>
        <ul>
          {contentDict[content]["notebook"].map((notebook) => {
            return (
              <li key={notebook["name"]}>
                <Nav.Link
                  href={notebook["href"]}
                  onClick={() => {
                    handleNav(notebook);
                  }}
                >
                  {notebook["name"]}
                </Nav.Link>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  };

  return (
    <Navbar fixed="top" expand={false} className="bg-dark-subtle mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <HeadAnimation />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleNav} />
        <Navbar.Offcanvas placement="end" show={showNav} onHide={handleNav}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Table of Content</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 p-1">
              {Object.keys(contentDict).map((content) => createNBList(content))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MainNav;
