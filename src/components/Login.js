import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Senad", age: 26, email: "senad@gmail.com" }));
        }}
      >
        Log in
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Login;
