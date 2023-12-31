import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [loginText, setLoginText] = useState("Login");

  const onlineStatus = useOnlineStatus();
  console.log("first render");

  return (
    <div className="flex justify-between sm:bg-green-200">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4"> onlineStatus: {onlineStatus ? "🌝" : "🌑"} </li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/Grocery"}>Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
