import { useState } from "react";
import axios from "axios";
import qs from "qs";
import "../App.css";

const Url = () => {
  const postData = (e) => {
    e.preventDefault();

    var data = qs.stringify({
      full: state,
    });
    var config = {
      method: "post",
      url: "https://urlshortner-backendapp.herokuapp.com/shorturl",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [state, setState] = useState();
  return (
    <>
      <h1>URL SHORTNER</h1>
      <form onSubmit={() => postData}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <button type="submit">Shrink</button>
        </div>
      </form>
    </>
  );
};

export default Url;
