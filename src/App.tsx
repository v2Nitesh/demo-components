import React from "react";
import "./App.css";
import { Login } from "login-component-v2";
import "login-component-v2/dist/index.css";

function App() {
  const loginAPI = () => {
    console.log("Invoke login API here");
  };
  return (
    <div>
      Learn React
      <Login
        buttonLabel="Login Button"
        emailRegex="[a-zA-Z][a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$"
        passwordRegex="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        loginClick={() => loginAPI()}
        titleColor="#33D4FF"
        buttonSize="large"
      />
    </div>
  );
}

export default App;
