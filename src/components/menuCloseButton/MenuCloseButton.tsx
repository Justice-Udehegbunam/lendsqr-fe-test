import "./MenuCloseButton.scss";

type PropTypes = {
  menuOpen: boolean;
  handleToggleMenu: () => void;
};

const MenuCloseButton = ({ menuOpen, handleToggleMenu }: PropTypes) => {
  return (
    <button
      className="menu-toggle-button"
      onClick={handleToggleMenu}
      title={menuOpen ? "Click to close menu" : "Click to open menu"}
    >
      {menuOpen ? "<" : ">"}
    </button>
  );
};

export default MenuCloseButton;
