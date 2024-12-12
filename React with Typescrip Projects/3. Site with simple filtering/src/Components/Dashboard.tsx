import Sidebar from "./SIdebar";
import Table from "./Table";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-900">
      <Sidebar />
      <div className="flex-1 ">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
