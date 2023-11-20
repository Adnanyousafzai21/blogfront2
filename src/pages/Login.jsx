import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="form" >
        <h2>LogIn</h2>
        <div className="feldgroup">
          <div className="single-feld">
            <input
              type="text"
              placeholder="Fist Name"
              name="fristname"
              // onChange={feilddata}
              required
              // value={data.fristname}
              autoComplete="off"
            />
          </div>
          <div className="single-feld">
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              // onChange={feilddata}
              required
              autoComplete="off"
            // value={data.lastname}
            />
          </div>
          <div className="submitbtn">
            <input
              type="submit"
              value="Log In"
              className="submit"
            // onClick={signup}
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
