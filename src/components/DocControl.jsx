import DocNav from "./DocNav";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function DocColab({ colab }) {
  if (colab != undefined) {
    return (
      <a href={colab} target="_blank">
        <Button className="btn-light" style={{ width: "55px" }}>
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
        <Button className="btn-light" style={{ width: "55px" }}>
          <i className="bi bi-github"></i>
        </Button>
      </a>
    );
  }
}

function DocControl({ showDocNav, setShowDocNav, colab, github }) {
  return (
    <div className="position-fixed bottom-0">
      <ButtonGroup vertical>
        <DocColab colab={colab} />
        <DocGithub github={github} />
        <DocNav showDocNav={showDocNav} setShowDocNav={setShowDocNav} />
      </ButtonGroup>
    </div>
  );
}

export default DocControl;
