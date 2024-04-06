// UserOptions.tsx
import React from "react";
import {
  activateUserIcon,
  blacklistUserIcon,
  viewDetailsIcon,
} from "../../assets";

import "./UserOption.scss";

interface Props {
  userStatus: string;
}

const UserOptions: React.FC<Props> = ({ userStatus }) => {
  const isUserActive = userStatus === "Active";
  const isUserBlacklisted = userStatus === "Blacklisted";

  return (
    <div className="user-options__conatiner">
      <button className="user-options__conatiner-listEl">
        <img src={viewDetailsIcon} alt="view details icon" />
        <span>View Details</span>
      </button>
      <button
        className="user-options__conatiner-listEl"
        disabled={isUserBlacklisted === true}
      >
        <img src={blacklistUserIcon} alt="blacklist user icon" />
        <span>Blacklist User</span>
      </button>
      <button
        className="user-options__conatiner-listEl"
        disabled={isUserActive}
      >
        <img src={activateUserIcon} alt="activate user icon" />
        <span className={isUserActive ? "disabled" : ""}>Activate User</span>
      </button>
    </div>
  );
};

export default UserOptions;
