import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Create.css";

const Create = () => 
{
  const navigate = useNavigate();
  const [list, setList] = useState("");
  const [formErrors, setFormErrors] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.value);
    setList(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formErrors.length > 1 || list.length <1){
      return;
    }
    const creatDate = new Date().toLocaleTimeString();
    console.log(creatDate);
    const newTodo = axios
      .post("http://localhost:3001/todo", {
        list,
        creatDate,
        updateAt: creatDate,
      })
      .then((res) => {
        console.log(res.data);
      });


      setList("");
      navigate("/todo");
      
  };
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
          value={list}
          id=""
          rows="4"
          onChange={handleChange}
        ></textarea>
        <p className="text-danger">{formErrors}</p>
          <button className="btn btn-primary mt-5 px-5" onClick={handleSubmit}>
          Add
          </button>
      </div>
      
    </div>
  );
};

export default Create;
