import Main from "../../components/main/Main";
import MenuCloseButton from "../../components/menuCloseButton/MenuCloseButton";
import Nav from "../../components/nav/Nav";
import SideBar from "../../components/sidebar/SideBar";
import FullUserDetails from "../fullUserDetails/FullUserDetails";

import "./Dashboard.scss";
import { useState } from "react";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="dashboard">
      <Nav />
      <section>
        <SideBar menuOpen={menuOpen} />

        <div
          className={`dashboard__section-alignment ${
            !menuOpen ? "close" : "open"
          }`}
        >
          <MenuCloseButton
            menuOpen={menuOpen}
            handleToggleMenu={handleToggleMenu}
          />
          {/* <Main /> */}
          <FullUserDetails/>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
