import Main from "../../components/main/Main";
import Nav from "../../components/nav/Nav";
import SideBar from "../../components/sidebar/SideBar";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Nav />
      <section>
        <SideBar />
        {/* <div className="dashboard__section-alignment">
          <Main />
        </div> */}
      </section>
    </div>
  );
};

export default Dashboard;
