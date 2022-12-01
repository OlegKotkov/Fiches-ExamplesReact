function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const userData = {
      UserName: event.target.UserName.value,
      Password: event.target.Password.value,
    };
    alert(JSON.stringify(userData));
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          UserName:
          <input type="text" name="UserName" />
        </label>
        <label>
          Password:
          <input type="password" name="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
