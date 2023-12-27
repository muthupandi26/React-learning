import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() =>
              loginText === "Login"
                ? setLoginText("Logout")
                : setLoginText("Login")
            }
            className="loginBtn"
          >
            {" "}
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
