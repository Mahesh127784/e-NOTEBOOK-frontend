import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [cred, setCred] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();

  const onchange = (e) => {
    const { value, name } = e.target;
    setCred({ ...cred, [name]: value });
  };

  const handleClick = async (e) => {
    const { name, email, password } = cred;
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    });
    const json = await response.json();
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
      <div>
        <p className="header">Make account to use iNOTEBOOK </p>
        <form onSubmit={handleClick}>
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            value={cred.name}
            onChange={onchange}
            id="fullname"
            name="name"
            type="text"
            placeholder="Full Name"
            className="form-control imp"
          />
          <br />
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            value={cred.email}
            onChange={onchange}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="form-control imp"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            value={cred.password}
            onChange={onchange}
            name="password"
            type="password"
            placeholder="Password"
            className="form-control imp"
            minLength={5}
            required
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </form>

        <footer className="footer">
          <p>
            By continuing, you agree to our
            <Link to="/termsandcond" className="terms">
              Terms of service, Privacy policy.
            </Link>
          </p>
          <hr />
          <p>
            Already an user?{" "}
            <Link className="signup" to="/login">
              Login
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Signup;
