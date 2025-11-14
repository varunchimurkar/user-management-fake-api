import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createUser, fetchUserById, updateUser } from "../api";
import Spinner from "../components/Spinner";

function UserForm({ isEdit }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(isEdit);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");


  useEffect(() => {
    if (isEdit) {
      fetchUserById(id)
        .then((u) => setForm({ name: u.name, email: u.email, phone: u.phone }))
        .catch(() => setError("Failed to load user"))
        .finally(() => setLoading(false));
    }
  }, [id, isEdit]);

  function Change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();

    try {
      if (isEdit) {
        const check = await updateUser(id, form);
        console.log("PUT Response:", check); // Check user update/edit 
        alert("User updated Successfully");
      } else {
      const createcheck =  await createUser(form);
      console.log(createcheck); // Check new user created or not
      alert("User created Successfully");
      }
      navigate("/");
    } catch {
      setError("Something went wrong");
    }
  }

  if (loading) return <Spinner />;

  return (
    <div>
      <h2>{isEdit ? "Edit User" : "Create User"}</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={submit}>
        <input name="name" value={form.name} onChange={Change} placeholder="Name" required />
        <input name="email" type="email" value={form.email} onChange={Change} placeholder="Email" required />
        <input name="phone" type="number" value={form.phone} onChange={Change} placeholder="Phone" required />

        <button type="submit">{isEdit ? "Update" : "Create"}</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default UserForm;
