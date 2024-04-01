import Home from "./Home";
import Desc from "./Desc";
import Notebook from "./Notebook";

function MainPage({ folder, file, setShowDocNav, contentDict }) {
  if (folder === undefined) {
    return <Home />;
  } else {
    if (file === undefined) {
      return <Desc contentDict={contentDict[folder]}/>;
    } else {
      return (
        <Notebook folder={folder} file={file} setShowDocNav={setShowDocNav} />
      );
    }
  }
}

export default MainPage;
