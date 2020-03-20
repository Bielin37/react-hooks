import React, { useState, useContext } from "react";

import { StateContext } from "../contexts";

export default function Register() {
  const { dispatch } = useContext(StateContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handlePasswordRepeat = e => {
    setPasswordRepeat(e.target.value);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "REGISTER", username });
      }}
    >
      <label htmlFor="register-username">Username:</label>
      <input
        value={username}
        onChange={handleUsername}
        type="text"
        name="register-username"
        id="register-username"
      />
      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        name="register-password"
        id="register-passsword"
        value={password}
        onChange={handlePassword}
      />
      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input
        type="password"
        name="register-password-repeat"
        id="register-passsword-repeat"
        value={passwordRepeat}
        onChange={handlePasswordRepeat}
      />
      <input
        type="submit"
        value="Register"
        disabled={
          username.length === 0 ||
          password.length === 0 ||
          password !== passwordRepeat
        }
      />
    </form>
  );
}
