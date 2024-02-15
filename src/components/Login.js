import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  //const UserContext = createContext();
  //const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const postData = (e) => {
    e.preventDefault();
    var datathree = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://urlshortner-backendapp.herokuapp.com/api/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: datathree,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/welcome");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={postData}>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="/ResetPassword">password?</a>
      </p>
    </form>
  );
};

export default Login;
