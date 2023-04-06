import "./UserLists.css";

function UserLists({ users, deleteUser }) {
  let content = "";
  if (users.length) {
    content = users.map((user) => (
      <div key={user.id} id={user.id} onClick={deleteUser} className="list">
        {user.username} {user.age} years old
      </div>
    ));
  }
  return <div>{content}</div>;
}

export default UserLists;
