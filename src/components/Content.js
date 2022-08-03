import LeftSideBar from "./content/LeftSideBar";
import Main from "./content/Main";
import RightSideBar from "./content/RightSideBar";

import "../styles/content.css";

function Content() {
  return (
    <section className="container">
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </section>
  );
}

export default Content;
