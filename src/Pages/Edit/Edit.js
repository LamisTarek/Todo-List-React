import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Edit = () => {
  const { id } = useParams();
  const [list, setList] = useState({});
  const [listName, setListName] = useState(""); //old data
  const [formErrors, setFormErrors] = useState("");
  const navigate = useNavigate();

  //get the data from db.json using axios
  const getTodo = async () => {
    const response = await axios.get(`http://localhost:3001/todo/${id}`);
    try {
        setList(response.data);
        setListName(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formErrors.length > 1 || listName.length <1){
        return;
        }
    const updateAt = new Date().toLocaleTimeString();
    const newTodo = axios
      .patch(`http://localhost:3001/todo/${id}`, {
        list: listName,
        updateAt,
      })
      .then((res) => {
        console.log(res.data);
      });

    navigate("/todo");
  };

  const handleChange = (e) => {
    setListName(e.target.value);
    if (e.target.value.length < 5) {
        setFormErrors("Please Enter At least 5 Character");
      }else if(e.target.value.length > 100){
        setFormErrors("Please Enter Less Then 100 Character");
      }else if(e.target.value.length== 0){
        setFormErrors("Please Enter Your List");
      }else
      {
        setFormErrors("");
      }

  };

  //updae the data from db.json using axios

  return (
    <div className="create ">
      <h2 className="mb-5">Add a New Todo</h2>
      <div className="create-conetent mb-3">
        <label htmlFor="list" className="form-label">
          Add Your New List
        </label>
        <textarea
          className="form-control"
          name="list"
          value={listName}
          id=""
          rows="4"
          onChange={handleChange}
        ></textarea>
        <p className="text-danger">{formErrors}</p>
        <p className="fs-5">Created At: {list.creatDate}</p>
        <button className="btn btn-primary mt-3 px-2" onClick={handleSubmit}>
          Update
        </button>

      </div>
    </div>
  );
};

export default Edit;
