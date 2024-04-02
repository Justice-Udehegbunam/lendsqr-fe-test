import { UserDetails } from "../../constants";
import "./UserInfoDisplayCard.scss";

type UserConstants = {
  id?: number;
  imgUrl: string;
  userDetails: string;
  numOfUsers: string;
};

const UserInfoDisplayCard = ({
  id,
  imgUrl,
  userDetails,
  numOfUsers,
}: UserConstants) => {
  return (
    <>
      <div key={id}>
        <img src={imgUrl} alt={userDetails} />
        <h3>{userDetails}</h3>
        <h2>{numOfUsers}</h2>
      </div>
    </>
  );
};

export default UserInfoDisplayCard;
