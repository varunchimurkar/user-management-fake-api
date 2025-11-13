import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import UserForm from "./Pages/UserForm";
import UserDetails from "./Pages/UserDetails";

function App() {
  return (
    <div className="container">
      <header>
        <h2>User Management App</h2>
        <Link to="/create" className="btn">Add User</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<UserForm isEdit={false} />} />
        <Route path="/edit/:id" element={<UserForm isEdit={true} />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
