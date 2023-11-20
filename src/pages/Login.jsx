import React from 'react'

const Login = () => {
  return (
    <div>
            <div className="form">
        <h2>Log In</h2>
        <div className="feldgroup">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="password" />
         <div className="submitbtn">
         <input type="button" value="Log In" className="submit" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Login
