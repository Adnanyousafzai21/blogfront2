import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {

const navigate = useNavigate()
  const [data, setdata] = useState({

    email: "",
    password: "",
  });

  const feilddata = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const login = async () => {

    try {
      const response = await fetch("http://localhost:8001/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const responseData = await response.json()
      if (responseData.user && responseData.user.fristname) {
        console.log("Registered user details:", responseData.user);
        localStorage.setItem("user", JSON.stringify(responseData));
        navigate("/dashboard");
      } else {
        console.error("User details not available in the response:", responseData);

      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="form" >
        <h2>LogIn</h2>
        <div className="feldgroup">
          <div className="single-feld">
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={feilddata}
              required
              value={data.email}
              autoComplete="off"
            />
          </div>
          <div className="single-feld">
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={feilddata}
              required
              autoComplete="off"
            value={data.password}
            />
          </div>
          <div className="submitbtn">
            <input
              type="submit"
              value="Log In"
              className="submit"
            onClick={login}
            />
          </div>
          <div className="single-feld">
            {/* <hr /> */}
            <p>
              Don't have acount <a href="/signup">Sign up </a>frist.
            </p>
          </div></div>
      </div>
    </div>
  )
}

export default Login
