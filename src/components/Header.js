import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const onlineStatus = useOnlineStatus();
  console.log("first render");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> onlineStatus: {onlineStatus ? "🌝" : "🌑"} </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/Grocery"}>Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() =>
              loginText === "Login"
                ? setLoginText("Logout")
                : setLoginText("Login")
            }
            className="loginBtn"
          >
            {console.log("inside render")}
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
