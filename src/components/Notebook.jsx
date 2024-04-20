import { useState, useEffect } from "react";
import { IpynbRenderer } from "react-ipynb-renderer";
import "react-ipynb-renderer/dist/styles/default.css";

function Notebook({ folder, file, setShowDocNav }) {
  const [data, setData] = useState([]);
  const owner = "ronald-hk-chung";
  const repo = "ssnotebook";
  const path = folder + "/" + file;

  useEffect(() => {
    const fetchData = async (owner, repo, path) => {
      // A function to fetch files from github using the api

      let data = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
      )
        .then((d) => d.json())
        .then((d) =>
          fetch(
            `https://api.github.com/repos/${owner}/${repo}/git/blobs/${d.sha}`
          )
        )
        .then((d) => d.json())
        .then((d) => JSON.parse(atob(d.content)));
      setData(data);
    };
    fetchData(owner, repo, path);
    window.scrollTo(0, 0);
    setShowDocNav(false)
  }, [path, setShowDocNav]);

  return (
    <>
      <IpynbRenderer
        ipynb={data}
        syntaxTheme={"ghcolors"}
        language={"python"}
        // seqAsExecutionCount={false}
        showLineNumbers={false}
      />
    </>
  );
}

export default Notebook;
