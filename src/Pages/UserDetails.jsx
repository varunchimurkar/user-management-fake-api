import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserById } from "../api";
import Spinner from "../components/Spinner";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserById(id) 
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner />;
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <h4>Company:</h4>
      <p><strong>Name:</strong> {user.company?.name}</p>
      <p><strong>Catch Phrase:</strong> {user.company?.catchPhrase}</p>
      <p><strong>BS:</strong> {user.company?.bs}</p>
      <h4>Address:</h4>
      {user.address?.street} {user.address?.suite} {user.address?.city} {user.address?.zipcode}

      <br /> <br /> <Link to="/">← Back</Link>
    </div>
  );
}

export default UserDetails;
