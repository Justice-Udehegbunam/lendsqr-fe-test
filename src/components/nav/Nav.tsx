import { logo } from "../../assets";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="nav__search-field">
        <input type="text" />
        <button type="button"></button>
        <button></button>
      </div>
    </nav>
  );
};

export default Nav;
