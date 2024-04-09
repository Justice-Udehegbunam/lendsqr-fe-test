import "./Main.scss";
import UsersInfoDisplay from "../usersInfoDisplay/UsersInfoDisplay";
import Table from "../table/Table";
import FilterFields from "../filterFields/FilterFields";

const Main = () => {
  return (
    <div className="main">
      <h1>Users</h1>
      {/* <UsersInfoDisplay />
      <Table /> */}
      <FilterFields />
    </div>
  );
};

export default Main;
