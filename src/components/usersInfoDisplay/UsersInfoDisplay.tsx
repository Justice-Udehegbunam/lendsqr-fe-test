import UserInfoDisplayCard from "../../reusables/userInfoDisplayCard/UserInfoDisplayCard";
import "./UsersInfoDisplay.scss";

import { useEffect, useState } from "react";

interface UserDetails {
  id: number;
  imgUrl: string;
  userDetails: string;
  numOfUsers: string;
}

const UsersInfoDisplay: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/574e237e-c3af-42b9-b844-13754356be0c"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }
        const data: UserDetails[] = await response.json();
        setUserDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user information:", error);
        setFetchError("Failed to users info");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user__info_display">
      {loading ? (
        <p>Loading...</p>
      ) : fetchError ? (
        <p className="error">{fetchError}</p>
      ) : (
        <>
          {userDetails.map((item) => (
            <UserInfoDisplayCard
              key={item.id}
              id={item.id}
              imgUrl={item.imgUrl}
              userDetails={item.userDetails}
              numOfUsers={item.numOfUsers}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default UsersInfoDisplay;
