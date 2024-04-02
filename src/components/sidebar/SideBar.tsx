import { dashboard, switchOrg } from "../../assets";
import { businesses, customers, settings } from "../../constants";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <menu>
      <a href="">
        <img src={switchOrg} alt="briefcase" />
        Switch Organization
      </a>

      <a href="">
        <img src={dashboard} alt="" />
        Dashboard
      </a>
      <ul>
        <h4>CUSTOMERS</h4>
        {customers.map((item) => (
          <li key={item.id}>
            <img src={item.imgUrl} alt={item.text} /> <p>{item.text}</p>
          </li>
        ))}
        <h4>BUSINESSES</h4>
        {businesses.map((item) => (
          <li key={item.id}>
            <img src={item.imgUrl} alt={item.text} /> <p>{item.text}</p>
          </li>
        ))}
        <h4>SETTINGS</h4>
        {settings.map((item) => (
          <li key={item.id}>
            <img src={item.imgUrl} alt={item.text} /> <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </menu>
  );
};

export default SideBar;
