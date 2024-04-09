import Container from "react-bootstrap/Container";
import React from "react";

function Desc({ contentDict }) {
  return (
    <Container>
      <h1 className="h2">{contentDict["name"]}</h1>
      <br />
      {contentDict["description"].map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
      <br />
      <h2 className="h3">Table of Content</h2>
      <br />
      {contentDict["notebook"].map((notebook) => {
        return (
          <React.Fragment key={notebook["href"]}>
            <li key={notebook["name"]}>
              <a href={notebook["href"]}>{notebook["name"]}</a>
            </li>
            <Container>
              <small></small>
              <div>
                <small>{notebook["description"]}</small>
              </div>
            </Container>
          </React.Fragment>
        );
      })}
    </Container>
  );
}

export default Desc;
