import React from "react";
import { UserDetails } from "../../constants";
import UserInfoDisplayCard from "../../reusables/userInfoDisplayCard/UserInfoDisplayCard";

const UsersInfoDisplay = () => {
  return (
    <div>
      {UserDetails.map((item) => (
        <UserInfoDisplayCard
          key={item.id}
          imgUrl={item.imgUrl}
          userDetails={item.userDetails}
          numOfUsers={item.numOfUsers}
        />
      ))}
    </div>
  );
};

export default UsersInfoDisplay;
