import { useState } from "react";

function Login() {
  const [data, setData] = useState({ userName: "", password: "" });

  function handleFormSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(data));
  }

  function handlInputCange(event, name) {
    setData({ ...data, [name]: event.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          UserName:
          <input
            type="text"
            value={data.userName}
            onChange={(event) => handlInputCange(event, "userName")}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(event) => handlInputCange(event, "password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
