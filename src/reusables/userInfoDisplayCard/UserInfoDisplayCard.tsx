import "./UserInfoDisplayCard.scss";

type UserConstants = {
  id?: number;
  imgUrl: string;
  userDetails: string;
  numOfUsers: string;
};

const UserInfoDisplayCard = ({
  imgUrl,
  userDetails,
  numOfUsers,
}: UserConstants) => {
  return (
    <>
      <div className="user__info_display-card">
        <img src={imgUrl} alt={userDetails} />
        <h3>{userDetails}</h3>
        <h2>{numOfUsers}</h2>
      </div>
    </>
  );
};

export default UserInfoDisplayCard;
