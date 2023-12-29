import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [cred, setCred] = useState({ email: "", password: "" });
  const onchange = (e) => {
    const { value, name } = e.target;
    setCred({ ...cred, [name]: value });
  };
  let navigate = useNavigate();

  const handleClick = async (e) => {
    const { email, password } = cred;
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/auth/loginPage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.authtoken) {
      //save authtoken in local storage and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      console.log("invalid");
    }
  };
  return (
    <div className="login">
      {" "}
      <form onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            value={cred.email}
            onChange={onchange}
            name="email"
            type="email"
            className="form-control imp"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={cred.password}
            onChange={onchange}
            name="password"
            placeholder="Enter your password"
            type="password"
            className="form-control imp"
            id="password"
          />
          <Link
            style={{
              textDecoration: "none",
              color: "blue",
              fontWeight: 600,
            }}
          >
            Forgot your password?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
