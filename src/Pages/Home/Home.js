import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-content text-center py-5">
          <h1 className="fs-1 fw-bolder">Treflla</h1>
          <p className="fs-4">Think, Plan and Work</p>
          <Link to="/todo" className="btn btn-primary">
            Get Started
            </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
