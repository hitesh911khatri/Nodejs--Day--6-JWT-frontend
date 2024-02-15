import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  //const UserContext = createContext();
  //const { state, dispatch } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();

    var data = JSON.stringify({
      email: email,
    });

    var config = {
      method: "post",
      url: "https://urlshortner-backendapp.herokuapp.com/api/user/forgotPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/toast");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={postData}>
      <h3>ForgetPassword</h3>

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

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ResetPassword;
