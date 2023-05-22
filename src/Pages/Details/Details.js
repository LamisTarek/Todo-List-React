import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [list, setList] = useState({});

  const getTodo = async () => {
    const response = await axios.get(`http://localhost:3001/todo/${id}`);
    try {
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);


  return (
    <div>
      {/* card */}
      <div className="card mb-3 d-flex justify-content-center align-items-center text-center vh-100">
        <div className="card-head">
          <h5 className="mb-0">
            <span className="text-success me-3">Todo-List: {list.list}</span>
          </h5>
          <div className="card-body">
            <p className="mb-0">Details</p>
            <p className="mb-0">Create At:{list.creatDate}</p>
            <p className="mb-0">Update At:{list.updateAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
