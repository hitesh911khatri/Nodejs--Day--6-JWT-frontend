import Alert from "react-bootstrap/Alert";
import NaviBar from "./navbar";
import "./app.css";

const Home = () => {
  return (
    <div className="home">
      <Alert variant="success">
        <Alert.Heading>URL SHORTNER SITE</Alert.Heading>
        <p>Dont have an account,signup now</p>
        {<NaviBar />}

        <p className="mb-0"></p>
        <hr />
        <hr />
      </Alert>
    </div>
  );
};

export default Home;
