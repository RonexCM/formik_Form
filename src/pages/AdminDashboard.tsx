import React, { useEffect, useState } from "react";
import { USER_URL } from "./Registration";

interface UserData {
  id: number;
  name: string;
  email: string;
}

const AdminDashboard: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USER_URL);
        const result = await response.json();
        console.log(
          "🚀 ~ file: AdminDashboard.jsx:13 ~ fetchData ~ result:",
          result
        );
        setData(result);
      } catch (error) {
        console.error("Couldnot fetch data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Registered Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
