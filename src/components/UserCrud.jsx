import { useState } from "react";
import api from "../api/axiosConfig";
import UserList from "./UserList";

const UserCrud = ({load, users}) => {
  /* state definitions */
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  /* form handlers */
  const save = async (event) => {
    event.preventDefault();
    await api.post("/create", {
        name: name,
        email: email
    });
    alert("User Record saved");

    // reset state
    setId("");
    setName("");
    setEmail("");
    load();
  }

  const editUser = (users) => {
    setName(users.name);
    setEmail(users.email);
    setId(users.id);
  }

  const deleteUser = async (id) => {
    await api.delete("/delete/" + id);
    alert("User Details Deleted Successfully");
    load();
  }

  const update = async (event) => {
    event.preventDefault();
    if(!id) return alert("User Details Not Found!");
    await api.put("/update", {
        id: id,
        name: name,
        email: email
    })

    alert("User Details Updated");
    // reset state
    setId("");
    setName("");
    setEmail("");
    load();
  }

  /* jsx */
  return (
    <div className="container mt-4">
      <form>
        <div className="form-group my-2">
          <input
            type="text"
            className="form-control"
            hidden
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button className="btn btn-primary m-4" onClick={save}>
            Register
          </button>
          <button className="btn btn-warning m-4" onClick={update}>
            Update
          </button>
        </div>
      </form>
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default UserCrud;
