import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    fristname: "",
    lastname: "",
    email: "",
    password: "",
    retyp_password: "",
  });

  const feilddata = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const signup = async () => {
    if (data.password == data.retyp_password) {
      try {
        const response = await fetch("https://socialappback.vercel.app/register", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fristname: data.fristname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
          }),
        });

        const responseData = await response.json();
        localStorage.setItem("user", JSON.stringify(responseData))
        navigate("/dashboard");
        console.log(responseData);
        setdata({
          fristname: "",
          lastname: "",
          email: "",   
          password: "",
          retyp_password: "",
        });
      } catch (eror) {
        console.log(eror);
      }
    }else{
      alert("password not match")
    }
  };

return (
  <div>
    <div className="form" method="post">
      <h2>Sign Up</h2>
      <div className="feldgroup">
        <div className="single-feld">
          <input
            type="text"
            placeholder="Fist Name"
            name="fristname"
            onChange={feilddata}
            required
            value={data.fristname}
          />
        </div>
        <div className="single-feld">
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={feilddata}
            required
            value={data.lastname}
          />
        </div>
        <div className="single-feld">
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={feilddata}
            required
            value={data.email}
          />
        </div>
        <div className="single-feld">
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={feilddata}
            required
            value={data.password}
          />
        </div>
        <div className="single-feld">
          <input
            type="text"
            placeholder="Re-type password"
            onChange={feilddata}
            required
            value={data.retyp_password}
            name="retyp_password"
          />
        </div>

        <div className="submitbtn">
          <input
            type="submit"
            value="Sign Up"
            className="submit"
            onClick={signup}
          />
        </div>
      </div>
    </div>
  </div>
);
};

export default Signup;
