import "./Main.scss";
import UsersInfoDisplay from "../usersInfoDisplay/UsersInfoDisplay";
import Table from "../table/Table";

const Main = () => {
  return (
    <div className="main">
      <h1>Users</h1>
      <UsersInfoDisplay />
      <Table />
    </div>
  );
};

export default Main;
