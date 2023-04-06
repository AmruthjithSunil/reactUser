import "./UserForm.css";

const UserForm = ({ addUser }) => {
  return (
    <form className="form">
      <label className="input" htmlFor="username">
        Username:
      </label>
      <br />
      <input className="input" type="text" id="username" name="username" />
      <br />
      <label className="input" htmlFor="age">
        Age:
      </label>
      <br />
      <input className="input" type="number" id="age" name="age" />
      <br />
      <br />
      <button className="input" onClick={addUser}>
        Add User
      </button>
    </form>
  );
};

export default UserForm;
