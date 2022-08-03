import LeftSideBar from "./content/LeftSideBar";
import Main from "./content/Main";
import RightSideBar from "./content/RightSideBar";

import "../styles/content.css";

function Content() {
  return (
    <div className="content">
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </div>
  );
}

export default Content;
