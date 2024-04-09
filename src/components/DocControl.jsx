import DocNav from "./DocNav";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function DocColab({ colab }) {
  if (colab != undefined) {
    return (
      <a href={colab} target="_blank">
        <Button className="btn-light" style={{ width: "55px", height: "45px" }}>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/color/48/google-colab.png"
            alt="google-colab"
          />
        </Button>
      </a>
    );
  }
}

function DocGithub({ github }) {
  if (github != undefined) {
    return (
      <a href={github} target="_blank">
        <Button className="btn-light" style={{ width: "55px", height: "45px" }}>
          <i className="bi bi-github"></i>
        </Button>
      </a>
    );
  }
}

function DocControl({ showDocNav, setShowDocNav, colab, github }) {
  return (
    <div className="fixed-bottom d-flex justify-content-center">
      <ButtonGroup>
        <DocNav showDocNav={showDocNav} setShowDocNav={setShowDocNav} />
        <DocColab colab={colab} />
        <DocGithub github={github} />
      </ButtonGroup>
    </div>
  );
}

export default DocControl;
