import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { Link } from "react-router-dom";

function DocNav({ showDocNav, setShowDocNav }) {
  const [nodes, setNodes] = useState([]);
  const target = useRef(null);

  const setNav = () => {
    setNodes(Array.from(document.querySelectorAll("h1, h2, h3")));
    setShowDocNav(!showDocNav);
  };

  const scrollToElement = (n) => {
    const elements = document.querySelectorAll("h1, h2, h3");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].innerHTML === n.innerHTML) {
        const elementTop = elements[i].getBoundingClientRect().top;
        const documentTop = document.body.getBoundingClientRect().top;
        const margin = 60;
        const top = elementTop - documentTop - margin;
        window.scrollTo({
          behaviour: "smooth",
          top: top,
        });
      }
    }
    setShowDocNav(false);
  };


  return (
    <>
      <Button
        className="btn-light"
        style={{ width: "55px" }}
        ref={target}
        onClick={setNav}
      >
        <i className="bi bi-book"></i>
      </Button>
      <Overlay target={target.current} show={showDocNav} placement="right">
        <Popover className="popover">
          <Popover.Header>Notebook Content</Popover.Header>
          <Popover.Body>
            {nodes.map((n) => {
              return (
                <li key={n.innerHTML}>
                  <Link onClick={() => scrollToElement(n)}>{n.innerHTML}</Link>
                </li>
              );
            })}
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  );
}

export default DocNav;
