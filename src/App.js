import react, { useState } from "react";

const LoginStatus = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  function togleLogin() {
    setIsLoggedIn((prev) => !prev);
  }
  return (
    <>
      {/* <h1>Hello</h1> */}
      <h1>{isLoggedIn ? "LogIn" : "LogOut"}</h1>
      <button onClick={togleLogin}>{isLoggedIn ? "Logout" : "LogIn"}</button>
    </>
  );
};

export default LoginStatus;
