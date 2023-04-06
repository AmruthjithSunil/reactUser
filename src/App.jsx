import { useState } from "react";
import UserForm from "./components/UserForm";
import UserLists from "./components/UserLists";
import InvalidOverlay from "./components/InvalidOverlay";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [invalid, setInvalid] = useState(false);

  function addUser(e) {
    e.preventDefault();
    if (username.value == "" || age.value == "") {
      setInvalid("Name and age cannot be null");
      return;
    }
    if (age.value < 0) {
      setInvalid("Age must be greater than 0");
      return;
    }

    const user = {
      username: username.value,
      age: age.value,
      id: Math.random().toString(),
    };

    setUsers((users) => [user, ...users]);
    username.value = "";
    age.value = "";
  }

  function validify() {
    setInvalid(false);
  }

  function deleteUser(e) {
    console.log(e.target);
    const temp = users.filter((user) => user.id != e.target.id);
    setUsers(temp);
  }

  return (
    <div className="root">
      <UserForm addUser={addUser} />
      <UserLists users={users} deleteUser={deleteUser} />
      {invalid ? (
        <InvalidOverlay reason={invalid} clickHandler={validify} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
