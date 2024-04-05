import "./Main.scss";
import UsersInfoDisplay from "../usersInfoDisplay/UsersInfoDisplay";
import Table from "../table/Table";
import Pagination from "../pagination/Pagination";

const Main = () => {
  return (
    <div className="main">
      <h1>Users</h1>
      <UsersInfoDisplay />
      <Table />
      <Pagination />
    </div>
  );
};

export default Main;
