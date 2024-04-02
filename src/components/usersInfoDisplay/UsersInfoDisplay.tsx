import { UserDetails } from "../../constants";
import UserInfoDisplayCard from "../../reusables/userInfoDisplayCard/UserInfoDisplayCard";
import "./UsersInfoDisplay.scss";

const UsersInfoDisplay = () => {
  return (
    <div className="user__info_display">
      {UserDetails.map((item) => (
        <UserInfoDisplayCard
          key={item.id}
          id={item.id}
          imgUrl={item.imgUrl}
          userDetails={item.userDetails}
          numOfUsers={item.numOfUsers}
        />
      ))}
    </div>
  );
};

export default UsersInfoDisplay;
