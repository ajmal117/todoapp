import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

function Create() {
  const [task, settask] = useState();
  const onchange = (e) => {
    settask(e.target.value);
  };

  const handleAdd = () => {
    axios
      .post("https://todoapp-xi-two.vercel.app/add", { task: task })
      .then((result) => {
        // console.log(result);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(task);

  return (
    <div className="class1">
      <div className="cl2">
        <h1>Todo List</h1>
        <div className="todoDiv">
          <input
            type="text"
            placeholder="Add Todo"
            className="inputTodo"
            onChange={onchange}
          />
          <button className="buttonTodo" onClick={handleAdd}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
