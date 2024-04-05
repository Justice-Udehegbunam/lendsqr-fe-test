import {
  activateUserIcon,
  blacklistUserIcon,
  viewDetailsIcon,
} from "../../assets";

import "./UserOption.scss";

const UserOptions = () => {
  return (
    <div className="user-options__conatiner">
      <p className="user-options__conatiner-listEl">
        <img src={viewDetailsIcon} alt="view details icon" />
        <span>View Details</span>
      </p>
      <p className="user-options__conatiner-listEl">
        <img src={blacklistUserIcon} alt="blacklist user icon" />
        <span>Blacklist User</span>
      </p>
      <p className="user-options__conatiner-listEl">
        <img src={activateUserIcon} alt="activate user icon" />
        <span>Activate User</span>
      </p>
    </div>
  );
};

export default UserOptions;
