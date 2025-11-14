import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUser, deleteUser } from "../api";
import Spinner from "../components/Spinner";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUser()
      .then((data) => setUsers(data))
      .catch(() => setError("Failed to fetch users"))
      .finally(() => setLoading(false));
  }, []);

  async function Delete(id) {
    if (!window.confirm("Delete user Successfully")) return;

    try {
      await deleteUser(id);
      alert("User deleted Successfully");
      setUsers(users.filter((u) => u.id !== id));
    } catch {
      alert("Delete failed");
    }
  }
  // console.log("Loading value:", loading); 

  if (loading) return <Spinner />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>
                <Link to={`/user/${u.id}`}>View</Link> |{" "}
                <Link to={`/edit/${u.id}`}>Edit</Link> |{" "}
                <button onClick={() => Delete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
