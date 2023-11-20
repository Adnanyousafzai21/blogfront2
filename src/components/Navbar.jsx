import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    Navigate("/singup");
  };

  return (
    <div className="navbar">
      <div className="log">
        <h3>InvestHub</h3>

        {/* <img src="favicon.ico" alt="" /> */}
      </div>
      <ul>
     
        <li>
          <a href={`${auth?"/dashboard":"/signup"}`}>dashboard</a>
        </li>
        <li>
          <a href="/">ALLMessage</a>
        </li>
        {auth ? (
          <>
            <li onClick={logout}>
              <a href="/signup">LogOut</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/signup">signup</a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
