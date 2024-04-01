import { useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav";
import MainPage from "./components/MainPage";
import DocControl from "./components/DocControl";
import contentDict from "./components/toc.json";

function App() {
  const [showDocNav, setShowDocNav] = useState(false);
  const [colab, setColab] = useState("#");
  const [github, setGithub] = useState("#");
  const { folder, file } = useParams();

  return (
    <>
      <MainNav
        setColab={setColab}
        setGithub={setGithub}
        contentDict={contentDict}
      />
      <MainPage
        folder={folder}
        file={file}
        setShowDocNav={setShowDocNav}
        contentDict={contentDict}
      />
      <DocControl
        showDocNav={showDocNav}
        setShowDocNav={setShowDocNav}
        colab={colab}
        github={github}
      />
    </>
  );
}

export default App;
