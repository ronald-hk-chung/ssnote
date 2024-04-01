import Container from "react-bootstrap/Container";
import React from "react";

function Desc({ contentDict }) {
  return (
    <Container>
      <h1 className="h2">{contentDict["name"]}</h1>
      <br />
      <p>{contentDict["description"]}</p>
      <br />
      <h2 className="h3">Table of Content</h2>
      {contentDict["notebook"].map((notebook) => {
        return (
          <React.Fragment key={notebook['href']}>
          
            <li key={notebook["name"]}>
              <a href={notebook["href"]}>{notebook["name"]}</a>
            </li>
            <div>{notebook["description"]}</div>
          </React.Fragment>
        );
      })}
    </Container>
  );
}

export default Desc;
