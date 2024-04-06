import { useState, useEffect } from "react";
import { dashboard, switchOrg, switchOrgDropDown } from "../../assets";
import { businesses, customers, settings } from "../../constants";
import "./SideBar.scss";

type PropTypes = { menuOpen: boolean };

const SideBar = ({ menuOpen }: PropTypes) => {
  const [activeIndex, setActiveIndex] = useState<number>(
    customers.length > 0 ? customers[0].id : -1
  );
  const [isSubMenuVisible, setIsSubMenuVisible] = useState<boolean>(true);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleItemClick = (id: number) => {
    setActiveIndex(id === activeIndex ? -1 : id);
  };

  const handleSubMenuToggle = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <menu
      style={{
        height: !isSubMenuVisible && !isTabletOrMobile ? "177vh" : "180vh",
      }}
      className={menuOpen ? "open" : "closed"}
    >
      <a onClick={handleSubMenuToggle}>
        <img src={switchOrg} alt="briefcase" />
        Switch Organization
        <img
          src={switchOrgDropDown}
          alt="switchOrgDropDown arrow"
          title="Click to open/close sub menu"
        />
      </a>

      <a href="">
        <img src={dashboard} alt="dashboard" />
        Dashboard
      </a>
      <ul style={{ display: isSubMenuVisible ? "block" : "none" }}>
        <h4>CUSTOMERS</h4>
        {customers.map((item) => (
          <li
            key={item.id}
            className={item.id === activeIndex ? "active" : "inactive"}
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.imgUrl} alt={item.text} /> <p>{item.text}</p>
          </li>
        ))}
        <h4>BUSINESSES</h4>
        {businesses.map((item) => (
          <li
            key={item.id}
            className={item.id === activeIndex ? "active" : "inactive"}
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.imgUrl} alt={item.text} /> <p>{item.text}</p>
          </li>
        ))}
        <h4>SETTINGS</h4>
        {settings.map((item) => (
          <li
            key={item.id}
            className={item.id === activeIndex ? "active" : "inactive"}
            onClick={() => handleItemClick(item.id)}
          >
            <img src={item.imgUrl} alt={item.text} /> <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default SideBar;
