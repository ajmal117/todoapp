import React from "react";
import { useState } from "react";
import Create from "./create";
import axios from "axios";
import "./styles.css";

function Home() {
  const [todoList, setTodoList] = useState([]);

  useState(() => {
    axios
      .get("https://todoapp-beta-three.vercel.app/get")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://todoapp-beta-three.vercel.app/delete/" + id)
      .then((result) =>
      window.location.reload()
      )
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    console.log(id);
    axios
      .put("https://todoapp-beta-three.vercel.app/" + id)
      .then((result) => {
        window.location.reload();
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Create />
      <div>
        {/* {todoList.length === 0 ? (
          <h1>No record</h1>
        ) : (
          todoList.map((item) => {
            return (
              <div className="mapDesign" key={item._id}>
                <li className={item.done ? "editDone" : ""}>{item.task}</li>
                <button onClick={() => handleDelete(item._id)}>delete</button>
                <button onClick={() => handleEdit(item._id)}>Done</button>
              </div>
            );
          })
        )} */}
      </div>
    </div>
  );
}

export default Home;
