import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const ForgetPassword = () => {
  const navigate = useNavigate();
  //const UserContext = createContext();
  //const { state, dispatch } = useContext(UserContext);

  const [password, setPasword] = useState("");
  const { token } = useParams();
  console.log(token);
  console.log(password);
  const postData = (e) => {
    e.preventDefault();

    var dataOne = JSON.stringify({
      password: password,
      token: token,
    });

    var config = {
      method: "post",
      url: "https://urlshortner-backendapp.herokuapp.com/api/user/newpassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: dataOne,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    navigate("/login");
  };

  return (
    <form onSubmit={postData}>
      <h3>ResetPassword</h3>
      <div className="mb-3">
        <label>New Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ForgetPassword;
