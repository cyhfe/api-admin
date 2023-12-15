import { useUsers } from "./query";
import { Card, Table } from "antd";
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
    <div className="p-4">
      <Card>
        <Table columns={columns} dataSource={users} />
      </Card>
    </div>
  );
}
