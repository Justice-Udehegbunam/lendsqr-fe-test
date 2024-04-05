import "./Nav.scss";
import { logo, navArrowDown, navNotificationBell } from "../../assets";
import { useState, useEffect } from "react";

type UserDetails = {
  id: number;
  email: string;
  password: string;
  name: string;
  imgUrl: string;
};

const Nav = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserDetails(user);
    }
  }, []);

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
        <img
          src={navNotificationBell}
          className="nav__last-container__notification-bell"
          alt="notification"
        />
        <div className="nav__last-container_profile">
          {userDetails && (
            <>
              <img
                src={userDetails.imgUrl}
                alt="imgUrl"
                className="nav__last-container_profile-img"
              />
              <p>{userDetails.name}</p>
            </>
          )}
          <img src={navArrowDown} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
