import "bootstrap/dist/css/bootstrap.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import "./App.css";
import UserCrud from "./components/UserCrud";

const App = () => {
  const [users, setUsers] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  const load = async () => {
    const result = await api.get("/all");
    setUsers(result.data);
  }

  return (
    <div>
      <h1 className="text-center">List Of Users</h1>
      <UserCrud load={load} users={users} />
    </div>
  )
}

export default App;