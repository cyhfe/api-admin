import { useUsers } from "./query";
import { Table } from "antd";
const columns = [
  {
    title: "username",
    dataIndex: "username",
  },
  {
    title: "id",
    dataIndex: "id",
  },
];

export default function Users() {
  const { data: users } = useUsers();

  return (
    <div className="p-2">
      <Table columns={columns} dataSource={users} />;
    </div>
  );
}
