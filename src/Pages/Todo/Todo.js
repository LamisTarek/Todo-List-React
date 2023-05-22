import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faTasks,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./Todo.css";
import axios from "axios";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  //get the data from db.json using axios
  const getAllTodo = async () => {
    const response = await axios.get("http://localhost:3001/todo");
    try {
      setTodo(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllTodo();
  }, []);

    //delete the data from db.json using axios
    const deleteTodo = async (id) => {
        const response = await axios.delete(`http://localhost:3001/todo/${id}`);
        try {
            const del = todo.filter((item) => item.id !== id);
            setTodo(del);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };



  return (
    <>
      <div className="todo">
        <h1 className="text-center pt-2">Todo-List</h1>
        <section>
          <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12">
                <div className="card w-75 mx-auto">
                  <div className="card-header p-3 text-center d-flex justify-content-between">
                    <h5 className="mb-0">
                      <FontAwesomeIcon
                        icon={faTasks}
                        className="text-success me-3"
                      />
                      Todo-List
                    </h5>
                    <Link to="/creat-todo" className="btn btn-primary">
                      Add a New Todo
                    </Link>
                  </div>
                  <div
                    className="card-body"
                    data-mdb-perfect-scrollbar="true"
                    style={{ position: "relative" }}
                  >
                    <table className="table mb-0 table-striped">
                      <thead>
                        <tr>
                          <th scope="col-2">Task</th>
                          <th scope="col-10">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todo.map((item) => (
                          <tr className="fw-normal" key={item.id}>
                            <td>
                              <span>{item.list}</span>
                            </td>
                            <td>
                            <Link to={`/edit-todo/${item.id}`}>
                              <FontAwesomeIcon
                                icon={faEdit}
                                className="text-success me-3"
                              />
                              </Link>

                              <FontAwesomeIcon onClick={() => deleteTodo(item.id)} style={{cursor: "pointer"}}
                                icon={faTrashAlt}
                                className="text-danger me-3"
                              />
                              <Link to={`/show-todo/${item.id}`}>
                              <FontAwesomeIcon
                                icon={faEye}
                                className="text-success me-3"
                              />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Todo;
