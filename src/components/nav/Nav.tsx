import "./Nav.scss";
import {
  logo,
  navArrowDown,
  navAvatar,
  navNotificationBell,
} from "../../assets";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="nav__logo" />
      <div className="nav__search-field">
        <input type="text" placeholder="Search for anything" />
        <button type="button">
          <i className="fas fa-search fa-white" style={{ color: "white" }}></i>
        </button>
      </div>
      <div className="nav__last-container">
        <a href="">Docs</a>
        <img src={navNotificationBell} alt="notification" />
        <div className="nav__last-container_profile">
          <img
            src={navAvatar}
            alt="avatar"
            className="nav__last-container_profile-img"
          />
          <p>Adedeji</p>
          <img src={navArrowDown} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
