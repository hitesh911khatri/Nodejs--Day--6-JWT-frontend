import axios from "axios";
import { useState } from "react";

const Table = () => {
  const [state, setState] = useState([]);

  var config = {
    method: "get",
    url: "https://urlshortner-backendapp.herokuapp.com",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      setState(response.data.short);
    })
    .catch(function (error) {
      console.log(error);
    });

  const details = (id) => {
    var config = {
      method: "get",
      url: `https://urlshortner-backendapp.herokuapp.com/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th>Full URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {state.map((shortUrl) => {
            return (
              <tr key={shortUrl._id}>
                <td>
                  <a href={shortUrl.full}>{shortUrl.full}</a>
                </td>
                <td>
                  <a
                    href={shortUrl.full}
                    onClick={() => details(shortUrl.short)}
                  >
                    {shortUrl.short}
                  </a>
                </td>
                <td>{shortUrl.clicks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
